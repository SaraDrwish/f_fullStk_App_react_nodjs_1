import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
// import axios from 'axios'
// import {Box , Typography , TextField , Button} from "@mui/material"
import "./register.css"
// import "../hero/hero.css"
import "../Login/login.css"
import Api from "../../config/api"
import { notifyError ,notifySuccess } from '../Notify'

const Register=()=>{
 
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)
  
  const [inputs, setInputs] = useState({
   firstName: "",
   lastName: "",
   email : "",
   password : "",
   rePassword : "",
  });
   
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

 
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      // console.log(inputs)
      if (inputs.password !== inputs.rePassword) {
        setLoading(false)
        return notifyError("password dosnt match !! ")
      }
      delete inputs.rePassword
      Api.Post("/auth/signup", inputs)
        .then(() => {
          notifySuccess("account created ,,, ")
          navigate("/Login");
          setLoading(false)

        })
        .catch((error) => {
          console.log(error)
        })
    }
    catch (error) {
      // console.log(error);
      const errMsg = error?.response?.data?.message || error?.response?.data?.error
      notifyError(errMsg)
      setLoading(false)

    }
  };
  
  return (
  <>
   <div className='register hero' id='register'>
      <div className="container">
        <div className="heroBox">
            <form  onSubmit={handleSubmit} action=""  >
               <h2>register</h2>
              <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder='first name' required  />
              <input type="text" name="lastName" value={inputs.lastName}
                onChange={handleChange} placeholder='last name' required /> 
              <input type="email" name="email" value={inputs.email} onChange={handleChange}
                placeholder='your email' required /> 
              <input type="password" name="password" value={inputs.password} onChange={handleChange}
                placeholder='enter your password' required />  
              <input type="password" name="rePassword" value={inputs.rePassword} onChange={handleChange}
                placeholder='re password' required />  
                
              <input type="submit" value="register" id="button" disabled={loading}  onClick={() => navigate("/login")} />
              {/* <input type="submit" value="register" id="button"   /> */}
 
               {/* <button type='submit' value="register" id='button' className='button' onClick={navigate("Login")}> register </button> */}
               <br />
                <a href='#'> if you already have an account <span> login </span>  </a>       
            </form>
        </div>   
      </div>
      </div>
    </>
  )
  
}

export default Register
