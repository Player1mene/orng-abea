import React from 'react'
import styles  from './PainelCardDog.module.css'
import { UserContext } from '../../../UserContext'

const PainelCardDog = ({dog, setModal, dogId}) => {

  const { data } = React.useContext(UserContext)

  return (
    <div className={styles.painelCardDog}>
        <div  className={styles.dogImage} style={{backgroundImage: `url('${dog.dogImageUrl}')`}}></div>
        <div className={styles.dogInfo}>
            <h1 className='margarine'>{dog.name}</h1>
            <p>Idade: {dog.age} Anos</p>
            <p>{dog.story}</p>
            <button disabled={(data[0].doc.dogIds).includes(dogId) ? true :  false}className={styles.button} onClick={()=> setModal({dog,dogId})}>{(data[0].doc.dogIds).includes(dogId) ? "Você Já fez contato" :  "Solicitar contato com cuidador"}</button>
        </div>
    </div>  
  )
}

export default PainelCardDog