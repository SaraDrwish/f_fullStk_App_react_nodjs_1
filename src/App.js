import './App.css';
import Header from './componants/header/Header';
 import Footer from './componants/footer/Footer';
import Login from './componants/Login/Login';
import Logout from './componants/logout/Logout.jsx';
import Register from './componants/register/Register.jsx';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
         <Login />
        {/* <Logout /> */}
        {/* <Register/> */}
        <Footer/>
      </header>
    </div>
  );
}

export default App;
