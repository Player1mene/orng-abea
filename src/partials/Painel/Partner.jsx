import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import PainelHome from './PainelPages/PainelHome'
import PainelHeader from './PainelPages/PainelNavbar/PainelHeader'
import styles from './Partner.module.css'
import { UserContext } from '../../UserContext'
import PainelDonation from './PainelPages/PainelDonation';
import Loading from '../Components/Loaders/Loading'
import PainelAdopt from './PainelPages/PainelAdopt';
import PainelEvents from './PainelPages/PainelEvents';
import PainelHelp from './PainelPages/PainelHelp';
const Partner = () => {

	const { login, data, loading } = React.useContext(UserContext);

  	if(login === false) return <Navigate to="/painel/login"/>;
	if(loading) return <Loading />
    if(data)
  	return (
	  	<div className={styles.partner}>
	  		<PainelHeader/>
			<div className={styles.contentPainel}>
				<Routes>
					<Route path='/' element={<PainelHome/>}/> 
					<Route path='/donation' element={<PainelDonation/>}/> 
					<Route path='/adoptme' element={<PainelAdopt/>}/> 
					<Route path='/events' element={<PainelEvents/>}/> 
					<Route path='/help' element={<PainelHelp/>}/> 
				</Routes>
			</div>		
	  	</div>
  	)
}

export default Partner