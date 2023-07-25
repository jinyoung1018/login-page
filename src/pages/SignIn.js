import { useNavigate } from "react-router-dom";


const SignIn = ()=>{
    // let container = document.getElementById('container')
  

//     const toggle = () => {
//      container.classList.toggle('sign-in')
//      container.classList.toggle('sign-up')
//    }
   
//    setTimeout(() => {
//      container.classList.add('sign-in')
//    }, 200)
   
   const navigate = useNavigate();

     return (
       <div className="App">
        <div id="container" className="container">
       {/* <!-- FORM SECTION --> */}
       <div className="row">
        
         {/* <!-- SIGN IN -->  */}
         <div className="col align-items-center flex-col sign-in">
           <div className="form-wrapper align-items-center">
             <div className="form sign-in">
               <div className="input-group">
                 <i className='bx bxs-user'></i>
                 <input type="text" placeholder="Email"/>
               </div>
               <div className="input-group">
                 <i className='bx bxs-lock-alt'></i>
                 <input type="password" placeholder="Password"/>
               </div>
               <button>
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
         {/* <!-- END SIGN IN --> */}
       </div>
       {/* <!-- END FORM SECTION -->
       <!-- CONTENT SECTION --> */}
       <div className="row content-row">
         {/* <!-- SIGN IN CONTENT --> */}
         <div className="col align-items-center flex-col">
           <div className="text sign-in">
             <h2>
               Welcome
             </h2>
     
           </div>
           <div className="img sign-in">
       
           </div>
         </div>
          {/* <!-- END SIGN IN CONTENT --> */}
        
       </div>
     </div>
       </div>
     );
}

export default SignIn;