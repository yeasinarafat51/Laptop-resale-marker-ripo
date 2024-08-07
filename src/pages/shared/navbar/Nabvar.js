import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Nabvar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(err => console.log(err));
  }
    const menuItems = <>
    <li><Link className='font-bold' to="/">Home</Link></li>
    
           
           {/* <li><Link to="/selling">Seleing</Link></li>
           <li><Link to="/booking">Booking</Link></li> */}
           {user?.uid ?
            <>
            <li><Link  className='font-bold' to="/dashboard">Dashboard</Link></li>
            <li><button  className='font-bold' onClick={handleLogOut}>Sign out</button></li>
            </>
            :
            <li><Link  className='font-bold' to="/login">Login</Link></li>}
            <li><Link className='btn btn-primary' to="/blog">Blog</Link></li>
            
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
            </ul>
          </div>
          <Link t0="/" className="btn btn-ghost normal-case text-xl">Laptop Resale</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuItems}
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
           
       
      </div>
    );
};

export default Nabvar;