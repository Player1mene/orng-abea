import React from 'react'
import styles from './ValueButtons.module.css'

const ValueButtons = ({setButton, setValue, value, button}) => {

  function handlerClick(){
    setButton(`${value},00`)
    setValue(value);
  }

  return (
    <div className={`${styles.button} ${button === `${value},00` ? styles.selected : "" }`} onClick={handlerClick}>
        R${value},00
    </div>
  )
}

export default ValueButtons