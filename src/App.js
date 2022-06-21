import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Footer from './pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Featured from './pages/Featured/Featured';

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='featured' element={<Featured/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
