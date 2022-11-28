import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Nabvar from '../pages/shared/navbar/Nabvar';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  // console.log(isSeller)
    return (
        <div>
            <Nabvar></Nabvar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">
      {/* {
        isSeller && <>
         <li><Link to="/dashboard/addproduct">My Product</Link></li>
        <li><Link to="/dashboard/addseller">Add Product</Link></li>
        </>
      } */}
      {/* {
        isAdmin && <>
         <li><Link to="/dashboard/allusers">All Buyers</Link></li>
         <li><Link to="/dashboard/allsellers">All Seller</Link></li>
        </>
      } */}
    {/* {
        isSeller? (<>
        <li><Link to="/dashboard/addproduct">My Product</Link></li>
        <li><Link to="/dashboard/addseller">Add Product</Link></li>

        </>):(
          <></>
        )
      } */}
     
      <li><Link to="/dashboard">My Orders</Link></li>
     
      {isAdmin ? (
          <>
            <li><Link to="/dashboard/allusers">All Buyers</Link></li>
        {/* <li><Link to="/dashboard/addseller">Add Product</Link></li> */}
        {/* <li><Link to="/dashboard/addproduct">My Product</Link></li> */}
        <li><Link to="/dashboard/allsellers">All Seller</Link></li>
          </>
        ) : (
          <>
           <li><Link to="/dashboard/addproduct">My Product</Link></li>
        <li><Link to="/dashboard/addseller">Add Product</Link></li>
          </>
        )
        
        }
        
        
      
      
      
     
    </ul>
  
  </div>
</div>

        </div>
    );
};

export default DashboardLayout;