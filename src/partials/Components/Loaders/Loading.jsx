import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loading}>
        <i className="fa-solid fa-paw fa-beat-fade"></i>
    </div>
  )
}

export default Loading;