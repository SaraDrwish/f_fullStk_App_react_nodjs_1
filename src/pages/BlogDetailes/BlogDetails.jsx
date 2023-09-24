import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate , useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import {fetchUserBlog} from "../../redux/reducers/blogs"
import domain from '../../config/domain'
import defaultImage from "../../default.png"
import Api from "../../config/api"
import { notifySuccess } from '../../componants/Notify'


function BlogDetails() {

  // const [blog, setBlog] = useState({})
  const {id} = useParams()
  // const id = useParams().id
  const navigate = useNavigate();
  // const [inputs, setInputs] = useState({})
  const blogs = useSelector( (state)=>state.blogs.data )
  const dispatch = useDispatch()
  const blogData = blogs.find((el)=>el._id == id)
  
  const [inputs, setInputs] = useState({
    title : "",
    content: "",
    image : null
  })

  const [image , setImage ] = useState(null)

  // console.log(blogs)
  // console.log(blog)

  useEffect(() => {
    dispatch(fetchUserBlog())
    setInputs(blogData)
   } , [id] )


  const fileUpload = (e) => {
    let image = e.target.files[0]
    // setImage({...inputs , image })
    setImage({image })
  }


  const getBlogDetail = async () => {

    // try {
    //   const { data } = await axios.get(`/api/v1/blog/delete-blog/${id}`)
    //   if (data?.success) {
    //     setBlog(data?.blog)
    //     setInputs({
    //       title: data?.blog.title,
    //       content: data?.blog.content,
    //       image: data?.blog.image
    //     })
    //    } 
    // }
    // catch(error) {
    //   console.log(error)
    // }

  }


  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // try {
    // }
    // catch (error) {
    //   console.log(error)
    // }
    Api.patch("/blog", { ...inputs, image: image || inputs.image }, {
      headers: {
        "Content-Type" : "multipart-form-data"
      }
    })
      .then(() => {
      notifySuccess("blog updated ")
    })
  }

  const imageRef = useRef()

  const uploadImage = () => {
    imageRef.current.click()
  }

  return (

    <div className='BlogDetails' id='BlogDetails' >
      <div className="container">
        <h2>BlogDetails</h2>
        <form action="" onSubmit={handleChange} >
          <h3>update posts</h3>
          {/* <input type="text" placeholder='update posts ' /> */}

          <input type="text" placeholder='title' required />
          <label name='title' value={inputs?.title} onChange={handleChange} > title </label>

          <label  name='content' value={inputs?.content} onChange={handleChange}  >content </label>
          <input type="text" placeholder='content' required  />

          <input type="file" placeholder='image url ' ref={imageRef} onClick={fileUpload} required  style={ {display:"none"} } />
          {/* <input type="file" placeholder='image' ref={imageRef} onClick={fileUpload} required  style={ {display:"none"} } /> */}
          {/* <label  name='content' value={inputs?.image}     > image url</label> */}
          {/* <label  name='content' value={inputs.image} onChange={handleChange}  required > image url</label> */}
          <img src={(inputs?.image && URL.createObjectURL( image)) || domain +  image || defaultImage} alt="image" />
          
          <button type="button" id='button' className='button' onClick={uploadImage} >Upload image </button>
          
          <button className='button' type='submit' onSubmit={handleSubmit}> update </button>

        </form>
      </div>
    </div>

  )
}

export default BlogDetails