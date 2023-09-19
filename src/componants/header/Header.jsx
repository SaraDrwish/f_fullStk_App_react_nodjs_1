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
                        <li>Blogs</li>
                        <li>My Blogs</li>
                        <li>Create Blog</li>
                      </ul>
                  </div>
                  <div className="rightList">
                      <ul>
                          <li>Login</li>
                          <li>Logout</li>
                          <li>Register</li>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}
export default Header
