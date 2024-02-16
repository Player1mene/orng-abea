import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'


function Footer() {


  return (
    <footer className={styles.footer}>
        <div className={`${styles.containerFooter} container`}>
            <div className={styles.links}>
                <ul>
                    <li className={styles.linksTitle}>Links úteis</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Serviços & Eventos</Link></li>
                    <li><Link to="/about-us">Sobre nós</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
                <ul>
                    <li className={styles.linksTitle}>Jeitos de apoiar</li>
                    <li><Link to="/turn-partner">Faça uma doação</Link></li>
                    <li><Link to="/turn-partner">Seja um Apoiador</Link></li>
                    <li><Link to="/adopt">Adote um Amiguinho</Link></li>
                </ul>
            </div>
            <div className={styles.copyright}>
                @ ABEA 2023 Todos os Direitos Reservados
            </div>
        </div>
    </footer>
  )
}

export default Footer;