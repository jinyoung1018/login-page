import './App.css';
import React, {useState} from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return(
    <BrowserRouter>
  <div className="App">
   
    <Routes>
      <Route path='/' element={<SignIn></SignIn>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      
    </Routes>
  
  </div>
</BrowserRouter>

  )
  
  

 
}

export default App;
