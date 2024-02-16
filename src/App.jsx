import 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Website from './partials/Website';
import Painel from './partials/Painel';
import { UserStorage } from './UserContext'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path='/*' element={<Website/>}/>
            <Route path="painel/*" element={<Painel/>}/>
          </Routes>
          </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
