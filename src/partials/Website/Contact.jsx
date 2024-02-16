import React from 'react'
import SectionInfo from '../Components/SectionInfo'
import Head from '../Components/Head'
import styles from './Contact.module.css'
import FormInput from '../Components/Inputs/FormInput'
import useForm from '../Components/Hooks/useForm'
import SbtButton from '../Components/Inputs/SbtButton'
import Error from '../Components/Loaders/Error'
const Contact = () => {

    const name = useForm();
    const email = useForm('email');
    const {value, onChange, error, onBlur} = useForm();
    const [confirm, setConfirm] = React.useState(false);
    const [transition, setTransition] = React.useState(false);


    function handlerClick(e){
        e.preventDefault();
        setTransition(true);
        if(name.validate() && email.validate() && value){
            setInterval(() => {
               setTransition(false)
               setConfirm(true) 
            }, 5000);
        }
    }

  return (
    <div className={styles.contact}>
        <Head title="Contato" description="Juntos, promovendo o bem-estar dos animais <br></br>desabrigados e necessitados."/>
        <SectionInfo name="Contato" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fcontact.jpg?alt=media&token=767a5fcb-9c41-422c-8416-81361fb607e8" info="Conecte-se conosco! Estamos aqui para ouvir você e ajudar os animais necessitados." />
        <div className={styles.contactForm}>
            <div className='container'>
            <div className={styles.formWrapper}>
                <form onSubmit={(e)=>{handlerClick(e)}}>
                    {transition ? <div className={styles.loading}><i className="fa-solid fa-paw fa-beat-fade"></i><p>Carregando....</p></div> : ""}
                    {confirm ? <div className={styles.loading}><i className="fa-solid fa-check"></i><p>Mensagem enviada com sucesso</p></div> : ""}

                    <h1>Fazer contato</h1>
                    <FormInput label="Nome:" type="text" name="name" placeholder="Digite seu nome..." {...name} />
                    <FormInput label="E-mail:" type="text" name="email" placeholder="Digite seu e-mail..." {...email}/>
                    <p className={styles.laber}>Mensagem:</p>
                            <textarea className={styles.formTextarea} name="message" placeholder='Digite uma mensagem para nós...' onChange={onChange} value={value} onBlur={onBlur}></textarea>
                            {error && <Error error={error}/> }
                            <div className={styles.specifyValue}>
                            <SbtButton name="Fazer solicitação de ajuda" disabled={false}/>
                    </div>    
                </form>
                <img src='https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2FcontactForm.jpg?alt=media&token=cd016b83-0406-4711-a83e-c3d6eaf1ed80' loading='lazy' alt=""/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact