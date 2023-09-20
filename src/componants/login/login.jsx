import React , {useState } from 'react'
import "./login.css"
import {useNavigate} from "react-router-dom"
import { useDispatch  , useSelector } from 'react-redux'
import Api from "../../config/api"
import {notifyError,notifySuccess} from '../Notify'
import {fetchUserData} from "../../redux/reducers/user"
// import { login } from '../../redux/reducers/user'



function Login() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const user = useSelector( (state)=>state.user.isLogin )
  // console.log(user)
  
  const [loading, setLoading] = useState(false);


  const [inputs, setInputs] = useState({
   email : "",
   password : "",
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
       
       Api.Post("/auth/login", inputs)
        .then(() => {
          notifySuccess("success login")
          navigate("/");
          setLoading(false)
          dispatch(fetchUserData())

        })
        .catch((error) => {
          console.log(error)
        })
    }
    catch (error) {
       const errMsg = error?.response?.data?.message || error?.response?.data?.error
      notifyError(errMsg)
      setLoading(false)

    }
  };
  

  return (
    <div className='hero' id='Login'>
      <div className="container">
        <div className="heroBox">
            
            <form action="" onSubmit={handleSubmit}>
               <h2>Login</h2>
               <input type="email"  placeholder='your email'  onChange={handleChange} /> 
               <input type="password"  placeholder='enter your password' onChange={handleChange} />  
               <input type="button" value="login" id='button' disabled={loading} className='button'   />    
               {/* <input type="button" value="login" id='button' disabled={loading} className='button' onClick={() => navigate("/") } />     */}
               <br />
                <a href='register' onClick={() => navigate("/register") } > if not sure please register </a>       
            </form>
        </div>   
      </div>
    </div>
  )
}

export default Login
