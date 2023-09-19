import React from 'react'
// import "./register.css"
import "../hero/hero.css"


function Register() {
  return (
   <div className='register'>
      <div className="container">
        <div className="heroBox">
            <form action="">
               <h2>Login</h2>
               <input type="text" name="firstname"  placeholder='Frist name' /> 
               <input type="text" name="lastname"  placeholder='last name' /> 
               <input type="email" name="email"  placeholder='your email' /> 
               <input type="password" name="password"  placeholder='enter your password' />  
               <input type="button" value="register" id='button' className='button' />    
               <br />
               <a href='#'> if not sure please register </a>       
            </form>
        </div>   
      </div>
    </div>
   )
}

export default Register
