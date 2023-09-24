import React, { useState , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from 'axios'
import { UploadFile } from '@mui/icons-material'
import defaultImage from "../../default.png"
import Api from "../../config/api"
import { notifyError, notifySuccess } from '../Notify'
import { fetchUserBlogs } from '../../redux/reducers/blogs' 
import { useDispatch } from 'react-redux'


function CreateBlog() {

  const id = localStorage.getItem("userId")
  const navigate = useNavigate()
  const imageField = useRef()
  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    title : "",
    content: "",
    image : null
  })
  
//////////////4:15
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

 
  const handleSubmit = async (e) => {
     e.preventDefault();
    try {
      // const { data } = await axios.post("/api/v1/blog/CreateBlog", {
      //   title: inputs.title,
      //   content: inputs.content,
      //   image: inputs.image,
      //   user: id,
      // });
      
      // if (data?.success) {
      //   toast.success("blog created")
      //   navigate("/myBlogs")
      // }

      Api.post("/blog", inputs, {
        headers: {"Content-type":"multipart/form-data"}
      })
        .then(() => {
          notifySuccess("blog createed ")
          dispatch(fetchUserBlogs())
          setInputs({
             title : "",
             content: "",
             image : null
          })
        })
  
    }
    catch (error) {
      // console.log(error);
      let errMsg = error?.response?.data?.message || error?.response?.data?.error 
      notifyError(errMsg)
    }
  };
  

  const uploadImage = () => {
    imageField.current.click()
  }

  const fileUpload = (e) => {
    let image = e.target.files[0];
    setInputs(...inputs , image)
    // console.log(e.target.files[0])
  }
  console.log(inputs)
  console.log(imageField.current)

  return (
    <div className='CreateBlog' id='CreateBlog'   >
      <div className="container">
        <form action="sasa" onSubmit={handleSubmit} encType='/sasa' >
                <h2> CreateBlog </h2>
                <p>you havent created a blog yet </p>
                <input type="text" placeholder='title' value={inputs.title} required onChange={handleChange}  />
                <label htmlFor="" >description</label>
                <input type="text" value={inputs.content} onChange={handleChange} placeholder='dsc' style={{display:"none"}} required />
                <label htmlFor="">img</label>
                <input type="text" placeholder='imge URL' ref={imageField} value={inputs.image}  onChange={fileUpload} />
                <input type="file" name="image" id="" ref={imageField} onChange={fileUpload} />
                <img  alt="image" src={ (inputs.image && URL.createObjectURL(inputs.image)  )|| defaultImage } />
                <button type="button" id='button' className='button' onClick={uploadImage} >Upload image </button>
                <button type="submit" id='button' className='button'  >submit</button>
        </form>
         
      </div>
      
    </div>
    // <div  style={{color: "red" , margin:"22px"}}>CreateBlog</div>
  )
}

export default CreateBlog