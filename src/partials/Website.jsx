import {useEffect, useState} from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Website/Home';
import Header from './Navbars/Header'
import Footer from './Navbars/Footer'
import Services from './Website/Services';
import Loading from './Components/Loaders/Loading';
import AdoptFriend from './Website/AdoptFriend';
import Contact from './Website/Contact';
import AboutUs from './Website/AboutUs';
import TurnPartner from './Website/TurnPartner';

function Website() {
  const [loader, setLoader] = useState(true)
  
  useEffect(()=>{
    const onPageLoad = () =>{
      setLoader(false);
    }

    if(document.readyState === 'complete'){
      onPageLoad();
    } else {
      window.addEventListener('load',onPageLoad);
    }
    return () => window.addEventListener('load',onPageLoad);
  },[])

  if(loader) return <Loading/>
  return (
    <div className='Website'>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/adopt' element={<AdoptFriend/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/turn-partner' element={<TurnPartner/>}/>
          </Routes>
        <Footer/>
    </div>
  )
}

export default Website;
