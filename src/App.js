import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About/About';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import Featured from './pages/Featured/Featured';
import Home from './pages/Home/Home';
import Itemdetail from './pages/ItemDetail/Itemdetail';
import Items from './pages/Items/Items';

import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import MyItems from './pages/MyItems/MyItems';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='items' element={<RequireAuth><Items/></RequireAuth>}/>
        <Route path='/item/:itemId' element={<RequireAuth><Itemdetail/></RequireAuth>}/>
        <Route path='/additem' element={<RequireAuth><AddItem/></RequireAuth>}/>
        <Route path='/myitems' element={<RequireAuth><MyItems/></RequireAuth>}/>
        
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
