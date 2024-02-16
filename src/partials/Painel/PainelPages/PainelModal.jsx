import React from 'react'
import styles from './PainelModal.module.css'
import FormInput from '../../Components/Inputs/FormInput'
import useForm from '../../Components/Hooks/useForm'
import SbtButton from '../../Components/Inputs/SbtButton'
import { db } from '../firebase/firebase'
import { addDoc, doc, collection, updateDoc, query, arrayUnion, where } from 'firebase/firestore'
import { UserContext } from '../../../UserContext'
import Error from '../../Components/Loaders/Error'

const PainelModal = ({modal, setModal}) => {

    const { data } = React.useContext(UserContext);
    const messageName = useForm()
    const fone = useForm('telefone')
    const [message, setMessage] = React.useState('');
    const [dogError,setDogError] = React.useState(null)
    const [dogLoad, setDogLoad] = React.useState(false);
    const [dogConfirm, setDogConfirm] = React.useState(false);

    function handlerOutSide(event){
        if(event.target === event.currentTarget) setModal(null)
      }

    async function handlerSubmiter(e){
        e.preventDefault();
         if (messageName.validate() && fone.validate() && message != ""){
          if((data[0].doc.dogIds).includes(modal.dogId) == false){
            setDogLoad(true)
            addDoc(collection(db, "adoptMessages"), {
              dogName: modal.dog.name,
              dogId: modal.dogId,
              userId: data[0].doc.userId,
              docDate: new Date().getTime(), 
              date: new Date().toLocaleDateString(),
            }).then(()=>{
              updateDoc(doc(db, "users", data[0].id),{
                dogIds: arrayUnion(modal.dogId),
            }).then(()=>{
              setDogLoad(false);
              setDogConfirm(true);
            });
            })
          }else{
            setDogError('Você já fez contato, aguarde a resposta no seu E-mail ou Telefone')
          }
        } else if(messageName.validate() && fone.validate()){
          if((data[0].doc.dogIds).includes(modal.dogId) == false){
              setDogLoad(true)
              addDoc(collection(db, "adoptMessages"), {
              dogName: modal.dog.name,
              dogId: modal.dogId,
              userId: data[0].doc.userId,
              docDate: new Date().getTime(), 
              date: new Date().toLocaleDateString(),
           
            }).then(()=>{
              updateDoc(doc(db, "users", data[0].id),{
                dogIds: arrayUnion(modal.dogId),
              }).then(()=>{
                setDogLoad(false);
                setDogConfirm(true);
              });
          });
          }else{
            setDogError('Você já fez contato, aguarde a resposta no seu E-mail ou Telefone')
          }
      }
    }
    

  return (
    <div className={styles.modal} onClick={handlerOutSide}>
        <div className={styles.formModal}>
          <div className={styles.formWrapper}>
          {dogLoad ? <div className={styles.loading}><i className="fa-solid fa-paw fa-beat-fade"></i> <p>Carregando...</p> </div> : ""}
          {dogConfirm ? <div className={styles.loading}><i className="fa-solid fa-check"></i> <p>Tudo pronto! o cuidador lhe enviara um e-mail ou fará um ligação para conclusão da adoção, fique de olho.</p> <button className={styles.fecharPopup} onClick={()=> setDogConfirm(false)}><i className='fa-solid fa-xmark'></i></button></div> : ""}
          <form className={styles.form} onSubmit={(e)=>{handlerSubmiter(e)}}>
               
               <FormInput label="Nome:" type="text" name="name" placeholder="Digite seu nome completo..."{...messageName}/>
               <FormInput label="Telefone:" type="text" name="telefone" placeholder="Digite seu numero de telefone... E.X:. (00) 00000-0000" {...fone}/>
               <p className={styles.laber}>Mensagem para o cuidador (opcional)</p>
               <textarea className={styles.formTextarea} name="message" placeholder='Digite uma mensagem para o cuidador...' onChange={({target}) => {setMessage(target.value)}} value={message}></textarea>
               <SbtButton name="Fazer solicitação de adoção"/>
               {dogError && <Error error={dogError}/>}
           </form>      
          </div>
           
            <div className={styles.imageDog}>
                <button className={styles.fecharPopup} onClick={()=> setModal(null)}><i className='fa-solid fa-xmark'></i></button>
                <div className={`${styles.dogName}`}><h1 className='margarine'>{modal.dog.name}</h1></div>
                <img loading='lazy' src={modal.dog.dogImageUrl}/>
            </div>
        </div>
    </div>
  )
}

export default PainelModal