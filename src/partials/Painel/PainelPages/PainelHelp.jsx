import React from 'react'
import styles from './PainelHome.module.css'
import donationStyle from './PainelHelp.module.css'
import ValueButtons from '../../Components/Inputs/ValueButtons'
import SbtButton from '../../Components/Inputs/SbtButton'
import { UserContext } from '../../../UserContext'
import {auth, db} from '../firebase/firebase'
import { collection, addDoc } from "firebase/firestore";
import FormInput from '../../Components/Inputs/FormInput'
import useForm from '../../Components/Hooks/useForm'
import Error from '../../Components/Loaders/Error'
import HeadPainel from '../../Components/HeadPainel'
   
const PainelHelp = () => {

    const { data } = React.useContext(UserContext);


    const title = useForm()
    const telefone = useForm('telefone')
    const {value, onChange, error, onBlur} = useForm()
    const [load, setLoad] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);


    async function handlerSubmit(e){
        e.preventDefault()
        if(title.validate() && telefone.validate() && value){
            setLoad(true)
            addDoc(collection(db, "helpingMessages"), {
                userId: data[0].doc.userId,
                title: title.value,
                docDate: new Date().getTime(), 
                date: new Date().toLocaleDateString(),
            }).then(()=>{
                setLoad(false)
                setConfirm(true)
            })
        }

    }

    





  	return (
  		<div className={styles.PainelHome}>
            
      <HeadPainel title="Pedir ajuda" description=""/>
			<div className={styles.painelTitle}>
                <i className="fa-solid fa-handshake"></i>
                <h1>Precisa de ajuda?</h1>
			</div>
            <div className={donationStyle.PainelDonationWrapper}>    
                <div className={donationStyle.donationPainel}>
                    <div className={donationStyle.form}>
                    {load ? <div className={donationStyle.loading}><i className="fa-solid fa-paw fa-beat-fade"></i> <p>Carregando...</p> </div> : ""}
                    {confirm ? <div className={donationStyle.loading}><i className="fa-solid fa-check"></i> <p>Tudo pronto! Sua mensagem foi enviada com sucesso</p> <button className={donationStyle.fecharPopup} onClick={()=> setConfirm(false)}><i className='fa-solid fa-xmark'></i></button></div> : ""}
                        <form onSubmit={(e)=>{handlerSubmit(e)}}>
                            <FormInput label="Titulo:" type="text" name="title" placeholder="Digite o titulo da mensagem..." {...title}/>
                            <FormInput label="Telefone:" type="text" name="number" placeholder="Digite o seu telefone para contato... (00) 00000-0000" {...telefone}/>
                            <p className={donationStyle.laber}>Mensagem:</p>
                            <textarea className={donationStyle.formTextarea} name="message" placeholder='Digite uma mensagem para nós...' onChange={onChange} value={value} onBlur={onBlur}></textarea>
                            {error && <Error error={error}/> }
                            <div className={donationStyle.specifyValue}>
                            <SbtButton name="Fazer solicitação de ajuda" disabled={false}/>
                            </div>            
                        </form>
                    </div>
                    <div className={donationStyle.donationImage}></div>
                </div>
            </div>
		</div>
  	)
}

export default PainelHelp