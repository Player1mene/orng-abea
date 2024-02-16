import React from 'react'
import styles from './PainelHome.module.css'
import adoptStyle from './PainelAdopt.module.css'
import PainelCardDog from './PainelCardDog'
import { db } from '../firebase/firebase'
import {query, collection, onSnapshot} from 'firebase/firestore'
import PainelModal from './PainelModal'
import HeadPainel from '../../Components/HeadPainel'

const PainelAdopt = () => {

    const [dogSingle, setDogSingle] = React.useState(null)
    const [modal,setModal]= React.useState(null)

    React.useEffect(()=>{
        const dogs = query(collection(db, "dogs"));
        const unsubscribe = onSnapshot(dogs, 
          ({docs}) => {
            setDogSingle(docs)
          },
          (error) => {
            setDogSingle(null)
            console.log(error)
          });
    },[])


  return (
    <div className={styles.PainelHome}>
      <HeadPainel title="Adote um amigo" description=""/>
      {modal && <PainelModal modal={modal} setModal={setModal}/>}
			<div className={styles.painelTitle}>
                <i className="fa-solid fa-dog"></i>
				<h1>Adote um Amigo</h1>
			</div>
            <div className={adoptStyle.adoptContent}>
                <div className={adoptStyle.adoptWrapper}>    
                    {dogSingle && dogSingle.map((dog,index)=>(
                        <PainelCardDog dog={dog.data()} dogId={dog.id} setModal={setModal} key={index}/>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default PainelAdopt