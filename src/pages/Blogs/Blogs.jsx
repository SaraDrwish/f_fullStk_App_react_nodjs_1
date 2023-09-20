import React from 'react'
import "./blogs.css"
import "../../componants/Login/login.css"

function Blogs() {
  return (
    <div className="Blogs hero">
      <div className="container">    
        <form action="">
            <h2>Create a Post </h2>
            <label htmlFor="">title</label>
            <input type="text" placeholder='title' />
            <label htmlFor="">description</label>
            <input type="text" placeholder='dsc' />
            <label htmlFor="">img</label>
            <input type="text" placeholder='imge URL' />
            <input type="file" name="" id="" />
            <button type="submit" id='button' className='button'>submit</button>
          </form>
        </div>
      </div>
  )
}

export default Blogs