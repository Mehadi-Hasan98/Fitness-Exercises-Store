import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Featured from './pages/Featured/Featured';
import Home from './pages/Home/Home';
import Items from './pages/Items/Items';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='items' element={<Items/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='featured' element={<Featured/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
