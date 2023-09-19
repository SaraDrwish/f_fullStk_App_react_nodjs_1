import './App.css';
import Header from './componants/header/Header';
 import Footer from './componants/footer/Footer';
import Login from './componants/Login/Login';
import Logout from './componants/logout/Logout.jsx';
import Register from './componants/register/Register.jsx';
import Blogs from "./pages/Blogs/Blogs.jsx"
import BlogDetails from "./pages/BlogDetailes/BlogDetails.jsx"
import UserBlog from "./pages/UserBlog/UserBlog.jsx"
import CreateBlog from "./pages/CreateBlog/CreateBlog.jsx"
import { Route, Routes } from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/myBlogs" element={<UserBlog />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />
          <Route path="/blogDetails/:id" element={< BlogDetails />} />
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
