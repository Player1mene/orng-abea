import React from 'react'
import styles from './SbtButton.module.css'
const SbtButton = ({ name, disabled }) => {
  return (
    <button className={styles.button} disabled={disabled}>
      {name}
    </button>
  )
}

export default SbtButton