import React from 'react'
 import "../Login/login.css"

function Logout() {
  return (
    <div className='logout' id='logout'>
      <div className="container">
        <div className="heroBox">
            <form action="">
               <h2>Logout</h2>
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
