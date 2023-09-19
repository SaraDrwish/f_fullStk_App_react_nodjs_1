import React from 'react'
import "../hero/hero.css"
// import "./login.css"

function Login() {
  return (
   <div className='hero'>
      <div className="container">
        <div className="heroBox">
            
            <form action="">
               <h2>Login</h2>
               <input type="email" name=""  placeholder='your email' /> 
               <input type="password" name=""  placeholder='enter your password' />  
               <input type="button" value="login" id='button' className='button' />    
               <br />
               <a href='#'> if not sure please register </a>       
            </form>
        </div>   
      </div>
    </div>
  )
}

export default Login