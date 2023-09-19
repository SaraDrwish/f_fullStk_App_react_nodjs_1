import React from 'react'
// import "./logout.css"
import "../hero/hero.css"

function Logout() {
  return (
    <div className='logout'>
      <div className="container">
        <div className="heroBox">
            <form action="">
               <h2>Login</h2>
               <input type="email" name=""  placeholder='your email' /> 
               <input type="password" name=""  placeholder='enter your password' />  
               <input type="button" value="submit" id='button' className='button' />    
               <br />
               <a href='#'> not sure please register </a>       
            </form>
        </div>   
      </div>
    </div>
   )
}

export default Logout
