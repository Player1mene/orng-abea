import React from 'react'
import styles from './Card.module.css'

const Card = ({ icon , image , title , desc}) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={image} alt={title} loading="lazy" />
            <div className={styles.circle}>
                <i className={icon}></i>
            </div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoWrapper}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Card