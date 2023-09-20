import React, { useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import "./header.css"
import { useDispatch , useSelector } from 'react-redux'
import {fetchUserData} from "../../redux/reducers/user"



function Header() {

  const isDispatch = useDispatch()
  const navigate = useNavigate()
  const [value, setValue] = useState()
  


  const isLogin = useSelector( (state)=>state.user.isLogin )
  const user = useSelector( (state)=>state.user.user )


  return (
    <div className='header'>
          <div className='container'>
              <div className="box">
                  <div className="logo">My Blog App </div>
                  <div className="boxLists">
                      <ul>
                        <a href="#"><li>Blogs</li></a>
                         <a href="#"><li>My Blogs</li></a> 
                        <a href="#"><li>Create Blog</li></a>
                      </ul>
                  </div>
                  <div className="rightList">
                      <ul>
                          <a href="Login"><li>Login</li></a>
                          <a href="register"><li>Register</li></a>
                          <a href="logout"><li>Logout</li></a>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}
export default Header
