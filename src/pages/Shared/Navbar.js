import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiLogIn } from 'react-icons/bi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import main from '../../assets/images/main.png';
import auth from '../../firebase.init';

const Navbar = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
      signOut(auth);
    };


    const menuItems = <>
    
                
            <li><NavLink to="/">Home</NavLink></li>
            { 
            user && <>
            <li><NavLink to="/items">Manage Inventory</NavLink></li>
            <li><NavLink to="/additem">Add Items</NavLink></li>
            <li><NavLink to="/myitems">My Items</NavLink></li>
            </>
            
            } 
            
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li>{user? <button className="btn btn-ghost text-xl"  onClick={logout} >Log Out<HiOutlineLogout/></button> : <Link to="/login">Login<BiLogIn/></Link>}</li>

    </>
    return (
        <div className="navbar bg-slate-600 font-mono text-xl px-12 text-zinc-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <img style={{height: '30px'}} src={main}/>
          <a href='/' className="btn btn-ghost normal-case font-bold font-mono text-2xl">IronFit</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal py-0 p-0">
           
            {menuItems}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;