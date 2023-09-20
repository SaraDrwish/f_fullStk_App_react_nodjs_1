// import React, {   useEffect} from 'react'
import React, { useState , useEffect} from 'react'
// import { useNavigate , Link } from 'react-router-dom'
import "./header.css"
import { useDispatch , useSelector } from 'react-redux'
import {fetchUserData , userLogout} from "../../redux/reducers/user"



function Header() {

  const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const [value, setValue] = useState()
  


  const isLogin = useSelector( (state)=>state.user.isLogin )
  const user = useSelector( (state)=>state.user.data )

    useEffect(() => {
     dispatch(fetchUserData())
  })

  console.log(isLogin)
  console.log(user)

  return (
    <div className='header'>
          <div className='container'>
              <div className="box">
                  <div className="logo">My Blog App </div>
                  <div className="boxLists">
                      <ul>
              {isLogin && user?.isAdmin && <a href="#"><li>Blogs</li></a> }
             
              {
                isLogin && <> <a href="#"><li>My Blogs</li></a> 
                <a href="#"><li>Create Blog</li></a>
              </>}
             
                        
                      </ul>
                  </div>
                  <div className="rightList">
                  <ul>
                    {!isLogin && 
                        <>
                          <a href="Login"><li>Login</li></a>
                          <a href="register"><li>Register</li></a>
                        </>
                     }
                    {isLogin && <a href="logout" onClick={()=>dispatch(userLogout)}><li>Logout</li></a>}
                   </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}
export default Header
