import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PainelLogin from './Painel/PainelLogin';
import Partner from './Painel/Partner';

function Painel() {

  return (
    <div className='Website'>
          <Routes>
            <Route path='/*' element={<Partner/>}/> 
            <Route path='/login/*' element={<PainelLogin/>}/>
          </Routes>
    </div>
  )
}

export default Painel;
