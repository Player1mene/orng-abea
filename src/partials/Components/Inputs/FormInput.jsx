import React from 'react'
import styles from './FormInput.module.css';
const FormInput = ({label, type, name, placeholder, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
            {label}
        </label>
        <div className={styles.gridInput}>
        <input id={name} 
        className={`${styles.input} ${error ? styles.inputError : ""}`} 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}/>
        </div>
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default FormInput