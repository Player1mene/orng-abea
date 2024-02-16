import React from 'react';
import { useNavigate } from 'react-router-dom'
import {auth, db} from './partials/Painel/firebase/firebase'
import { signInWithEmailAndPassword, onAuthStateChanged,  signOut} from "firebase/auth";
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";

export const UserContext = React.createContext();

export const UserStorage = ({children}) =>{
  const [login,setLogin] = React.useState(null);
  const [loading,setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data,setData] = React.useState(null);
  const [donation, setDonation] = React.useState(null)
  const [adopts, setAdopts] = React.useState(null);
  const [subs, setSubs] = React.useState(null)
  const [helping, setHelping] = React.useState(null)

  async function out(){
      try {
        const out = await signOut(auth)
        setData(null)
        setLogin(false)
        setLoading(true);
      } catch(error){
        console.log(error)
      } finally {
        setLoading(false);
      }
}


async function getDonation(userId){
      const donations = query(collection(db, "donation"), where("userId", "==", userId));
      const snap = onSnapshot(donations, 
        ({docs}) => {
          setDonation(docs)
        },
        (error) => {
          setDonation(null)
          console.log(error)
        });
}

async function getDogs(userId){
  const dogos = query(collection(db, "adoptMessages"), where("userId", "==", userId));
  const adopt = onSnapshot(dogos, 
    ({docs}) => {
      setAdopts(docs)
    },
    (error) => {
      setAdopts(null)
      console.log(error)
    });
}

async function getSubs(userId){
  const subrs = query(collection(db, "userSubscribers"), where("userId", "==", userId));
  const adopt = onSnapshot(subrs, 
    ({docs}) => {
      setSubs(docs)
    },
    (error) => {
      setSubs(null)
      console.log(error)
    });
}

async function getHelping(userId){
  const helper = query(collection(db, "helpingMessages"), where("userId", "==", userId));
  const helping = onSnapshot(helper, 
    ({docs}) => {
      setHelping(docs)
    },
    (error) => {
      setHelping(null)
      console.log(error)
    });
}



  async function userLogin(email,password){
    await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setLoading(true)
            getUserData(userCredential.user.uid);
          })  
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode == "auth/invalid-credential"){
              setError('E-mail e senha incorretos ou a conta não existe')
            }
            setLogin(false)
            setLoading(false);
    });
  }


  async function getUserData(userId){
          const userData = query(collection(db, "users"), where("userId", "==", userId));
          const { docs } = onSnapshot(userData,
          ({docs})=>{ 
            setData([{doc: docs[0].data(), id: docs[0].id}]);
            setLogin(true);
            setError(false)
            setLoading(false)
            getDonation(userId)
            getHelping(userId)
            getDogs(userId)
            getSubs(userId)
          },(error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(false)
            setLogin(false)
            setLoading(false);
          });
  }

React.useEffect(()=>{
        async function autoLogin(){
              onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              getUserData(uid)
            } else {
              out();
            }
          });
            }
            autoLogin(); 
},[]);




  return (
       <UserContext.Provider value={{login, data, error, loading, userLogin, out, donation, adopts, subs, helping}}>
            {children}    
        </UserContext.Provider>
  )
}
