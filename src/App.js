import './App.css';
import Header from './componants/header/Header';
// import HeroOne from './componants/hero/HeroOne.jsx';
import Footer from './componants/footer/Footer';
import Login from './componants/login/login';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <HeroOne /> */}
         <Login/>
         <Footer/>
      </header>
    </div>
  );
}

export default App;