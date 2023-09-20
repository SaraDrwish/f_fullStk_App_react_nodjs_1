import * as React from 'react'
// import axios from 'axios'
// import toast from "react-hot-toast"
// import Card from "@mui/material/Card"
import { useNavigate } from 'react-router-dom'

export default function BlogCard({

    title, 
    description,
    // content,
    image,
    username,
    time,
    id,
    isUser

} )
    

{
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`BlogDetails${id}`)
    }


    const handleDelete = async () => {
        
    }

 return (
      <div className='BlogCard' id='BlogCard '>
          <div className='container'>
           <form action="">
                <h2> Blog Card </h2>
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






 
 

 