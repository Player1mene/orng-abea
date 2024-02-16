import React from 'react'
import {auth, db} from './firebase/firebase'
import FormInput from '../Components/Inputs/FormInput'
import SbtButton from '../Components/Inputs/SbtButton'
import useForm from '../Components/Hooks/useForm'
import LoginForm from './LoginPages/LoginForm';
import LoginCreate from './LoginPages/LoginCreate';
import styles from './PainelLogin.module.css'
import {Route, Routes, Navigate} from 'react-router-dom'
import { UserContext } from '../../UserContext'
const PainelLogin = () => {

  const { login, data } = React.useContext(UserContext);


    if(login === true) return <Navigate to="/painel/"/>
    return (
    <div className={styles.painelLogin}>
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/signup" element={<LoginCreate/>}/>
          </Routes>
      <div className={styles.dogImage}></div>
    </div>
  )
}

export default PainelLogin