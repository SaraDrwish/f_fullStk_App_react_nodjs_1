import React from 'react'
import "./hero.css"

function HeroOne() {
  return (
    <div className='hero'>
      <div className="container">
        <div className="heroBox">
            
            <form action="">
               <h2>Login</h2>
               <input type="email" name=""  placeholder='your email' /> 
               <input type="password" name=""  placeholder='enter your password' />  
               <input type="button" value="submit" />    
               <br />
               <a href='#'> not sure please register </a>       
            </form>
        </div>   
      </div>
    </div>
  )
}

export default HeroOne
