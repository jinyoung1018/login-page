import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



function App() {

  // const signIn = (email, password) => {
  //   return function (dispatch, getState, {history}){
  //     axios({
  //       method: "post",
  //       url: "",
  //       data: {
  //         email: email,
  //         password: password,
  //       },
  //     })
  //     .then((res)=>{
  //       dispatch(
  //         setUser({
  //           email: res.data.email,
  //         })
  //       );
  //       const accessToken = res.data.token;
  //       setCookie("is_login", `${accessToken}`);
  //       document.location.href = "/";
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //   }
  // }

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
