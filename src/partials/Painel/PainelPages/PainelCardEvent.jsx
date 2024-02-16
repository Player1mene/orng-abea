import React from 'react'
import styles  from './PainelCardEvent.module.css'
import { UserContext } from '../../../UserContext'
import { auth, db } from '../firebase/firebase'
import { addDoc, collection, doc, updateDoc, arrayUnion } from 'firebase/firestore'

const PainelCardEvent = ({event,eventId}) => {

  const { data } = React.useContext(UserContext)


  async function handlerClicker(){
     if((data[0].doc.eventIds).includes(eventId) == false){
        addDoc(collection(db, "userSubscribers"), {
          eventName: event.eventName,
          eventId: eventId,
          userId: data[0].doc.userId,
          docDate: new Date().getTime(), 
          date: new Date().toLocaleDateString(),
        }).then(()=>{
          updateDoc(doc(db, "users", data[0].id),{
            eventIds: arrayUnion(eventId),
        })
        })
      } 
}


  return (
    <div className={styles.painelCardEvent}>
        <div className={styles.eventInfo}>
            <h1 className='margarine'>{event.eventName}</h1>
            <p>Descrição: {event.eventDesc}</p>
            <p>Data: {event.eventDate}</p>
            <p>Local: {event.eventPlace}</p>
            <button disabled={(data[0].doc.eventIds).includes(eventId) ? true :  false} className={styles.button} onClick={handlerClicker} >{(data[0].doc.eventIds).includes(eventId) ? "Você já está inscrito" :  "Fazer inscrição"}</button>
        </div>
        <div  className={styles.eventImage} style={{backgroundImage: `url('${event.eventImage}')`}}></div>
    </div>  
  )
}

export default PainelCardEvent