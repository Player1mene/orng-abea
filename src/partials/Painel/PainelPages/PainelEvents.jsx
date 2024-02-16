import React from 'react'
import styles from './PainelHome.module.css'
import adoptStyle from './PainelEvents.module.css'
import { db } from '../firebase/firebase'
import {query, collection, onSnapshot} from 'firebase/firestore'
import PainelCardEvent from './PainelCardEvent'
import HeadPainel from '../../Components/HeadPainel'

const PainelEvents = () => {

    const [eventSingle, setEventSingle] = React.useState(null)

    React.useEffect(()=>{
        const events = query(collection(db, "events"));
        const unsubscribe = onSnapshot(events, 
          ({docs}) => {
            setEventSingle(docs)
          },
          (error) => {
            setEventSingle(null)
            console.log(error)
          });
    },[])


  return (
    <div className={styles.PainelHome}>
      <HeadPainel title="Eventos" description=""/>
			<div className={styles.painelTitle}>
                <i className="fa-regular fa-calendar-days"></i>
				<h1>Eventos</h1>
			</div>
            <div className={adoptStyle.adoptContent}>
                <div className={adoptStyle.adoptWrapper}>    
                    {eventSingle && eventSingle.map((event,index)=>(
                        <PainelCardEvent event={event.data()} eventId={event.id}  key={index}/>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default PainelEvents