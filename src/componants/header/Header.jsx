import React from 'react'
import "./header.css"

function Header() {
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
                          <a href="logout"><li>Logout</li></a>
                          <a href="register"><li>Register</li></a>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}
export default Header
