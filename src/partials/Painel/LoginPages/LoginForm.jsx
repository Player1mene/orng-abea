import React from 'react'
import {auth, db} from '../firebase/firebase'
import FormInput from '../../Components/Inputs/FormInput'
import SbtButton from '../../Components/Inputs/SbtButton'
import useForm from '../../Components/Hooks/useForm'
import styles from './LoginForm.module.css'
import {Link , Navigate} from 'react-router-dom'
import HeadPainel from '../../Components/HeadPainel'
import { UserContext } from '../../../UserContext'
import Error from '../../Components/Loaders/Error'
const LoginForm = () => {

  const email = useForm();
  const senha = useForm();
  const { userLogin , error,loading } = React.useContext(UserContext);

  async function hundlerSubmit(event){
    event.preventDefault();
    if(email.validate() && senha.validate()){
        userLogin(email.value,senha.value);
    }
  }

    return (
    <div className={styles.formWrapper}>
          <HeadPainel title="Fazer login" description=""/>
          <div className={styles.title}>
            <div className={styles.logo}>
              <Link to="/" className={styles.logoSingle}>
                    <p className='margarine'>abea</p>
                    <i className="fa-solid fa-paw"></i>
              </Link>
            </div>
            <h1>Fazer Login</h1>
          </div>
          <form className={styles.form} onSubmit={(e)=>{hundlerSubmit(e)}}>
          <FormInput label="E-mail:" type="email" name="email" placeholder="Digite seu e-mail..."{...email} />
          <FormInput label="Senha:" type="password" name="senha"  placeholder="Digite sua senha..." {...senha} />
          <div className={styles.buttonSingle}>
              <SbtButton name={loading ? "Carregando..." : "Fazer login" } disabled={loading ? true : false}/>
              <div className={styles.linkRegister}><p>Ainda não tem uma conta? <Link to="/painel/login/signup">Cadastre-se aqui</Link></p></div>
          </div>
          {error && <Error error={error}/>}
          </form>
      </div>
  )
}

export default LoginForm