import React from 'react'
import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom';
const LinkButton = ({ link, name}) => {
  return (
    <Link to={link} className={styles.linkButton}>{name}</Link>
  )
}

export default LinkButton