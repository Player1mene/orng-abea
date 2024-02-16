import React from 'react'
import styles from './PainelHome.module.css'
import { UserContext } from '../../../UserContext'
import HeadPainel from '../../Components/HeadPainel';
   
const PainelHome = () => {

	const { donation, adopts, subs, helping } = React.useContext(UserContext);
	const [orderDonation, setOrderDonation] = React.useState(null);
	const [messagesAdopt, setMessagesAdopt] = React.useState(null)
	const [insc,setInsc] = React.useState(null)
	const [help,setHelp] = React.useState(null)

	React.useEffect(()=>{
		if(donation){
			let p = donation.sort((a,b)=>{
				if(a.data().docDate < b.data().docDate){
					return +1
				}else{
					return -1
				}
			})
			setOrderDonation(p)
		}
	},[donation])


	React.useEffect(()=>{
		if(adopts){
			let p = adopts.sort((a,b)=>{
				if(a.data().docDate < b.data().docDate){
					return +1
				}else{
					return -1
				}
			})
			setMessagesAdopt(p)
		}
	},[adopts])


	React.useEffect(()=>{
		if(subs){
			let p = subs.sort((a,b)=>{
				if(a.data().docDate < b.data().docDate){
					return +1
				}else{
					return -1
				}
			})
			setInsc(p)
		}
	},[subs])


	React.useEffect(()=>{
		if(helping){
			let p = helping.sort((a,b)=>{
				if(a.data().docDate < b.data().docDate){
					return +1
				}else{
					return -1
				}
			})
			setHelp(p)
		}
	},[helping])

  	return (
  		<div className={styles.PainelHome}>
			<HeadPainel title="Inicio" description=""/>
			<div className={styles.painelTitle}>
				<i className="fa-solid fa-house"></i>
				<h1>Inicio</h1>
			</div>
			<div className={styles.painelInfos}>
				<div className={styles.painelInfosSingle}>
					<div className={styles.infoTitle}>Solicitações de Doação</div>
					<div className={styles.infoContents}>
						<ul>
							{orderDonation && orderDonation.map((cash, index)=>
								<li key={index}>R${cash.data().cash},00 - {cash.data().date}</li>
							)}
						</ul>
					</div>
				</div>

				<div className={styles.painelInfosSingle}>
					<div className={styles.infoTitle}>Solicitações de Adoção</div>
					<div className={styles.infoContents}>
						<ul>
							{messagesAdopt && messagesAdopt.map((dog, index)=>
								<li key={index}>{dog.data().dogName} - {dog.data().date}</li>
							)}
						</ul>
					</div>
				</div>

					<div className={styles.infoContentsDuo}>
						<div className={styles.painelInfosDuo}>
						<div className={styles.infoTitle}>Inscrições</div>
						<div className={styles.infoContents}>
							<ul>
								{insc && insc.map((event, index)=>
									<li key={index}>{event.data().eventName} - {event.data().date}</li>
								)}
							</ul>				
						</div>
						</div>

						<div className={styles.painelInfosDuo}>
						<div className={styles.infoTitle}>Pedidos de ajuda</div>
						<div className={styles.infoContents}>
							<ul>
								{help && help.map((message, index)=>
									<li key={index}>{message.data().title} - {message.data().date}</li>
								)}
							</ul>				
						</div>
						</div>
					</div>
				

			
				
			</div>
		</div>
  	)
}

export default PainelHome