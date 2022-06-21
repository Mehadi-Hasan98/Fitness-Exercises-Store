import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Footer from './pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login';
import About from './pages/About/About';

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
