import React from 'react'
import styles from './CardDog.module.css'

const CardDog = ({ name, image, depoiment}) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <div className={styles.dogImage} style={{backgroundImage: `url('${image}')`}}></div>
            <h3>{name}</h3>
        </div>
        <div className={styles.info}>
            <div className={styles.infoWrapper}>
      			{depoiment}
            </div>
        </div>
    </div>
  )
}

export default CardDog;