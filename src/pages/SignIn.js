import { useNavigate } from "react-router-dom";
import {  useState } from "react";



const SignIn = ()=>{
   
   const navigate = useNavigate();

   const[email, setEmail] = useState('');
   const[password, setPassword] = useState('');

   const emailChange = (e) =>{
    setEmail(e.target.value);    
   };

   const passwordChange = (e) =>{
    setPassword(e.target.value);    
   }

   const handleSignIn = () =>{

    
    if(email.length < 1){
        alert('이메일은 필수 입력 사항입니다.');
        return;
    }
    if(password.length < 1){
        alert('비밀번호는 필수 입력 사항입니다.');
        return;
    }
    

    console.log( email, password);
   }



     return (
       <div className="App">
        <div id="container" className="container">
        <div className="row content-row">
         <div className="col align-items-center flex-col">
           <div className="text sign-in">
             <h2>
               Welcome
             </h2>
     
           </div>
           
         </div>
        
       </div>
       <div className="row">
        
         <div className="col align-items-center flex-col sign-in">
           <div className="form-wrapper align-items-center">
             <div className="form sign-in">
               <div className="input-group">
                 <i className='bx bxs-user'></i>
                 <input type="text" placeholder="Email" value={email} onChange={emailChange}/>
               </div>
               <div className="input-group">
                 <i className='bx bxs-lock-alt'></i>
                 <input type="password" placeholder="Password" value={password} onChange={passwordChange}/>
               </div>
               <button onClick={handleSignIn}>
                 Sign in
               </button>
               <p>
                 <b>
                   Forgot password?
                 </b>
               </p>
               <p>
                 <span>
                   Don't have an account?
                 </span>
                 <b onClick={() => navigate(`/signup`)} className="pointer">
                   Sign up here
                 </b>
               </p>
             </div>
           </div>
           <div className="form-wrapper">
       
           </div>
         </div>
       
       </div>
     
      
     </div>
       </div>
     );
}

export default SignIn;