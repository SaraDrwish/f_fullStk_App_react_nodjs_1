import './App.css';
import Header from './componants/header/Header';
 import Footer from './componants/footer/Footer';
import Login from './componants/Login/Login';
// import Logout from './componants/logout/Logout.jsx';
import Register from './componants/register/Register.jsx';
import Blogs from "./pages/Blogs/Blogs.jsx"
import BlogDetails from "./pages/BlogDetailes/BlogDetails.jsx"
import UserBlog from "./pages/UserBlog/UserBlog.jsx"
import CreateBlog from "./pages/CreateBlog/CreateBlog.jsx"
import { Route, Routes } from 'react-router-dom';
// import Notify from "./componants/Notify"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {  useDispatch, useSelector } from 'react-redux'
 
function App() {

  const isLogin = useSelector( (state)=>state.user.isLogin )
  const user = useSelector((state) => state.user.data)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ToastContainer/> 
        <Routes>
          <Route path="/" element={<Blogs />} />
          {isLogin && user.isAdmin && <Route path="/blogs" element={<Blogs />} /> }
          {isLogin && <Route path="/myBlogs" element={<UserBlog />} />}
          {isLogin && <Route path="/CreateBlog" element={<CreateBlog />} />  }
          {isLogin && <Route path="/blogDetails/:id" element={< BlogDetails />} />}
          
          <Route path="+" element={<Blogs />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
         {/* <Login /> */}
        {/* <Logout /> */}
        {/* <Register/> */}
        <Footer/>
      </header>
    </div>
  );
}

export default App;
