import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
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
            <li><NavLink to="/items">Manage Items</NavLink></li>
            <li><NavLink to="/additem">Add Items</NavLink></li>
            <li><NavLink to="/myitems">My Items</NavLink></li>
            </>
            
            } 
            
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li>{user? <button className="btn btn-ghost text-xl"  onClick={logout} >Log Out</button> : <Link to="/login">Login</Link>}</li>

    </>
    return (
        <div className="navbar bg-primary font-mono text-xl px-12 text-zinc-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <a href='...' className="btn btn-ghost normal-case font-bold font-mono text-2xl">IronFit</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;