import React from 'react'
import styles from './PainelHome.module.css'
import donationStyle from './PainelDonation.module.css'
import ValueButtons from '../../Components/Inputs/ValueButtons'
import SbtButton from '../../Components/Inputs/SbtButton'
import { UserContext } from '../../../UserContext'
import {auth, db} from '../firebase/firebase'
import { collection, addDoc } from "firebase/firestore";
import HeadPainel from '../../Components/HeadPainel'
   
const PainelDonation = () => {

    const { data } = React.useContext(UserContext);


    const [button,setButton] = React.useState("0,00");
    const [value, setValue] = React.useState("");
    const [load, setLoad] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);




    function handlerSetNumber(e){
        let valueE = e.target.value;
        console.log(valueE)
        console.log(valueE.split('.'))
        if(valueE >= 0){
            if(valueE.split('.').length > 1){
                setButton(`${valueE.split('.')[0]},${valueE.split('.')[1]}`);
                setValue(valueE)
            }else if(valueE === ""){
                setButton("0,00")
                setValue(valueE)    
            }else{
                setButton(`${valueE},00`)
                setValue(valueE)
            }
        }else{
            setButton(`0,00`)
            setValue(valueE)
        }
    }

    async function handlerSubmit(e){
        e.preventDefault()
        if(value){
            if(value >= 2){
                setLoad(true)
                addDoc(collection(db, "donation"), {
                    userId: data[0].doc.userId,
                    cash: value,
                    docDate: new Date().getTime(), 
                    date: new Date().toLocaleDateString(),
                }).then(()=>{
                    setLoad(false)
                    setConfirm(true)
                })
            }
        }
    }


  	return (
  		<div className={styles.PainelHome}>
            
            <HeadPainel title="Faça uma doação" description=""/>
			<div className={styles.painelTitle}>
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h1>Fazer uma doação</h1>
			</div>
            <div className={donationStyle.PainelDonationWrapper}>    
                <div className={donationStyle.donationPainel}>
                    <div className={donationStyle.form}>
                    {load ? <div className={donationStyle.loading}><i className="fa-solid fa-paw fa-beat-fade"></i> <p>Carregando...</p> </div> : ""}
                    {confirm ? <div className={donationStyle.loading}><i className="fa-solid fa-check"></i> <p>Tudo pronto! um e-mail será enviado para você com mais informações para a doação, fique de olho.</p> <button className={donationStyle.fecharPopup} onClick={()=> setConfirm(false)}><i className='fa-solid fa-xmark'></i></button></div> : ""}
                        <form onSubmit={(e)=> handlerSubmit(e)}>
                            <div className={donationStyle.donationValue}><h1>R${button}</h1></div>
                            <div className={donationStyle.formButtons}>    
                                <ValueButtons setButton={setButton} setValue={setValue} button={button} value="2"/>
                                <ValueButtons setButton={setButton} setValue={setValue} button={button} value="5"/>
                                <ValueButtons setButton={setButton} setValue={setValue} button={button} value="10"/>
                                <ValueButtons setButton={setButton} setValue={setValue} button={button} value="15"/>
                                <ValueButtons setButton={setButton} setValue={setValue} button={button} value="20"/>
                                <ValueButtons setButton={setButton} setValue={setValue} button={button} value="25"/>
                            </div>
                            <div className={donationStyle.specifyValue}>
                                <input className={donationStyle.donationInput} type='number' limit="500" placeholder='Valor Especifico' value={value} onChange={handlerSetNumber} />
                            </div>
                            <div className={donationStyle.specifyValue}>
                            <SbtButton name="Fazer solicitação de doação" disabled={false}/>
                            </div>
                      
                        </form>
                    </div>
                    <div className={donationStyle.donationImage}></div>
                </div>
            </div>
		</div>
  	)
}

export default PainelDonation