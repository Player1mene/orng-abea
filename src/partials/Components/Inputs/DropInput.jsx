import React from 'react'
import styles from './DropInput.module.css'

const DropInput = ({title, dropInfo}) => {

  const [show, setShow] = React.useState(true);


  return (
    <div  className={`${styles.dropDown} ${!show ? "" : styles.dropUp}`}>
        <div className={styles.title} onClick={()=>{setShow(!show)}}>
            <p>{title}</p>
            {!show? <i className='fa-solid fa-caret-down'></i> : <i className='fa-solid fa-caret-right'></i>}
        </div>
        <div className={styles.info}>
            <p>{dropInfo}</p>
        </div>
    </div>
  )
}

export default DropInput