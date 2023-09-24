import React, { useState , useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BlogCard from '../../componants/BlogCard';
import { useDispatch  , useSelector} from 'react-redux';
// const [blogs , setBlogs ] = useState([])
import { fetchUserBlogs } from '../../redux/reducers/blogs';
import domain from '../../config/domain';
 

const UserBlog = () => {

  const dispatch = useDispatch()
  // const blogs = useSelector()
  const blog = useSelector((state) => state.blogs.data)
  console.log(blogs)
  // const [blogs , setBlogs] = useState()
  useEffect(() => {
    dispatch(fetchUserBlogs())
  }, []);

  let blogs = [{
    _id: "sasa",
    title: "hello",
    description: "sasa",
    username: { user: { username: "sasa" } },
    blog:"207"
    
  }]

  return  (
//     <div>
//       {blogs && blogs.length ? (
//         blogs.map((blog)=>(
//           <BlogCard
//             id={blog._id}
//             isUser={true}
//             title={blog.title}
//             description={blog.description}
//             image={blog.image}
//             time={blog.createdAt}
//           />
//        ))}
//     </div>
//   )
  // }
  
    <div>
         {blog && blog.length > 0 && (
      // {blog && blog.length ? 0 && (
        blog.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            content={blog.content}
            // description={blog.description}
            image={domain+blog.image}
            // time={blog.createdAt}
          />
        ))
     
      )}
    </div>
  );
};

 

export default UserBlog