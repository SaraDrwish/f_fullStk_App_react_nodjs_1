// import { Api } from '@mui/icons-material';
import Api from "../config/api"
import axios from 'axios';
import * as React from 'react'
// import toast from "react-hot-toast"
// import Card from "@mui/material/Card"
import { useNavigate } from 'react-router-dom'
import { notifySuccess , notifyError } from "./Notify";

export default function BlogCard({
    title, 
    // description,
    content,
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
        try {
            const { data } = await Api.delete(`/blog/${id}`)
            // const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`)
            if (data?.success) {
                alert("deleted")
                window.location.reload()
                
            }
        }
        catch (error) {
            console.log("error" , error)
        }
    }

 return (
      <div className='BlogCard' id='BlogCard '>
          <div className='container'>
                 <h2> Blog Card </h2>
                 {isUser && (
                     <>
                         <div>       
                            <button  onClick={handleEdit} >edit </button>
                            <button  onClick={handleDelete}> delete</button>
                        </div>
                      </> 
                 )}
                 
                 <div>
                  <h3> the username is : {username} , time:  {time} </h3>
                  <img  src={image} alt='image' />
                 </div>
                <h5 >title : {title} </h5>
                <h5 >content : {content} </h5>
 
         </div>
     </div>
    )
    
}


 
 

 