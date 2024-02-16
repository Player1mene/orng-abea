import React from 'react'
import {auth, db} from '../firebase/firebase'
import FormInput from '../../Components/Inputs/FormInput'
import SbtButton from '../../Components/Inputs/SbtButton'
import useForm from '../../Components/Hooks/useForm'
import styles from './LoginCreate.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../UserContext'
import HeadPainel from '../../Components/HeadPainel'
import { collection, addDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
const LoginCreate = () => {

  const name = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const [cLoading, setCLoading] = React.useState(false)

  async function hundlerSubmit(event){
    event.preventDefault();
    if(email.validate() && password.validate() && name.validate()){
      setCLoading(true)
      createUserWithEmailAndPassword(auth, email.value, password.value)
		  .then((userCredential) => {
        setCLoading(false)
		    const user = userCredential.user;
		    addDoc(collection(db, "users"), {
			  name: name.value,
			  userId: user.uid,
        eventIds: [''],
        dogIds: [''],
			});
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
        console.log(errorMessage)
        setCLoading(false)
		  });
    }
  }

    return (
    <div className={styles.formWrapper}>
          <HeadPainel title="Cadastrar-se" description=""/>
          <div className={styles.title}>
            <div className={styles.logo}>
              <Link to="/" className={styles.logoSingle}>
                    <p className='margarine'>abea</p>
                    <i className="fa-solid fa-paw"></i>
              </Link>
            </div>
            <h1>Fazer Cadastro</h1>
          </div>
          <form className={styles.form} onSubmit={hundlerSubmit}>
          <FormInput label="Nome:" type="text" name="name" placeholder="Digite seu nome..."{...name} />
          <FormInput label="E-mail:" type="email" name="email" placeholder="Digite seu e-mail..."{...email} />
          <FormInput label="Senha:" type="password" name="senha"  placeholder="Digite sua senha..." {...password} />
          <div className={styles.buttonSingle}>
              <SbtButton name={cLoading ? "Carregando..." : "Cadastrar-se"} disabled={cLoading ? true : false}/>
              <div className={styles.linkRegister}><p>Já tem uma conta? <Link to="/painel/login/">Faça login aqui</Link></p></div>
          </div>
          </form>
      </div>
  )
}

export default LoginCreate