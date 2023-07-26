import { useNavigate } from "react-router-dom";
import {  useState } from "react";


const SignUp = () =>{
    

const navigate = useNavigate();

const[username, setUsername] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');
const[checkPassword, setCheckPassword] = useState('');
const[nickname, setNickname] = useState('');
const[phone, setPhone] = useState('');
const[birthday, setBirthday] = useState('');


const usernameChange = (e) =>{
    setUsername(e.target.value);    
   };

const emailChange = (e) =>{
    setEmail(e.target.value);    
   };

const passwordChange = (e) =>{
    setPassword(e.target.value);    
   };

const checkPasswordChange = (e) =>{
    setCheckPassword(e.target.value);    
   }

const nicknameChange = (e) =>{
    setNickname(e.target.value);    
   };

const phoneChange = (e) =>{
    setPhone(e.target.value);    
   };

const birthdayChange = (e) =>{
    setBirthday(e.target.value);    
   }

const handleSignup = () =>{

    if(username.length < 1){
        alert('이름은 필수 입력 사항입니다.');
        return;
    }
    if(email.length < 1){
        alert('이메일은 필수 입력 사항입니다.');
        return;
    }
    if(password.length < 1){
        alert('비밀번호는 필수 입력 사항입니다.');
        return;
    }
    if(checkPassword.length < 1){
        alert('비밀번호 확인은 필수 입력 사항입니다.');
        return;
    }

    if(password != checkPassword){
        alert('비밀번호가 일치하지않습니다.');
        return;
    }

    console.log(username, email, password, checkPassword, nickname, phone, birthday)
   }
   

   
     return (
       <div className="App">
        <div id="container" className="container">
       <div className="row">
         <div className="col align-items-center flex-col sign-up">
           <div className="form-wrapper align-items-center">
             <div className="form sign-up">
               <div className="input-group">
                 <i className='bx bxs-user'></i>
                 <input type="text" placeholder="Username" value={username} onChange={usernameChange}/>
               </div>
               <div className="input-group">
                 <i className='bx bx-mail-send'></i>
                 <input type="email" placeholder="Email" value={email} onChange={emailChange}/>
               </div>
               <div className="input-group">
                 <i className='bx bxs-lock-alt'></i>
                 <input type="password" placeholder="Password"  value={password} onChange={passwordChange}/>
               </div>
               <div className="input-group">
                 <i className='bx bxs-lock-alt'></i>
                 <input type="password" placeholder="Confirm password"  value={checkPassword} onChange={checkPasswordChange}/>
               </div>
               <div className="input-group">
                 <i className='bx bxs-lock-alt'></i>
                 <input type="text" placeholder="Nickname"  value={nickname} onChange={nicknameChange}/>
               </div>
               <div className="input-group">
                 <i className='bx bxs-lock-alt'></i>
                 <input type="number" placeholder="Phone number"  value={phone} onChange={phoneChange}/>
               </div>
               <div className="input-group">
                 <i className='bx bxs-lock-alt'></i>
                 <input type="text" placeholder="Birthday"  value={birthday} onChange={birthdayChange}/>
               </div>
               <button  onClick={handleSignup}>
                 Sign up
               </button>
               <p>
                 <span>
                   Already have an account?
                 </span>
                 <b onClick={() => navigate(`/`)} className="pointer">
                   Sign in here
                 </b>
               </p>
             </div>
           </div>
         
         </div>
       
        
       </div>
    
       <div className="row content-row">
       
         <div className="col align-items-center flex-col">
           <div className="img sign-up">
           
           </div>
           <div className="text sign-up">
             <h2>
               Join with us
             </h2>
     
           </div>
         </div>
       </div>
     </div>
       </div>
     );
       
}

export default SignUp;