import React, { useState , useEffect }  from 'react'
import "./blogs.css"
import "../../componants/Login/login.css"
import BlogCard from "../../componants/BlogCard"
import blogs from '../../redux/reducers/blogs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAminBlogs } from '../../redux/reducers/blogs'
import domain from '../../config/domain'


function Blogs() {

const dispatch = useDispatch()

// const [blogs , setBlogs ] = useState([])
const blogs = useSelector( (state)=>state.blogs.allData)
  useEffect(() => {
    dispatch(fetchAminBlogs())

  } , [] )

  return (
    <div className="Blogs hero">
      <div className="container"> 
        <h2>Create a Post </h2>
  
        {blogs && blogs.map((blog)=>(
      
            <BlogCard
              id={blog?._id}
              // isUser={localStorage.getItem("userId") === blog?.user._id}
              title={blog?.title}
              content={blog?.content}
              image={domain + blog?.image}
              // username={blog?.user?.username}
              username={blog?.owner?.firstName}
              // time={blog?.createAt}
            />

         ))}

         <div >
           <label  > title : </label>
            <input type="text" placeholder='title' />
            <label htmlFor="">description</label>
            <input type="text" placeholder='dsc' />
            <label htmlFor="">img</label>
            <input type="text" placeholder='imge URL' />
            <input type="file" name="" id="" />
            <button type="submit" id='button' className='button'>submit</button>
          </div>
           
          
        </div>
      </div>
  )
}

export default Blogs