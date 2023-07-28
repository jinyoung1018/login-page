import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';



function App() {



  return(
    <BrowserRouter>
  <div className="App">
   
    <Routes>
      <Route path='/' element={<LogIn></LogIn>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      
    </Routes>
  
  </div>
</BrowserRouter>

  )
  
  

 
}

export default App;
