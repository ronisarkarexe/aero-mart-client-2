import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Admin.css'
import useAuth from '../../hooks/useAuth';

const Admin = () => {
   const { user, handleSignOut } = useAuth()
   return (
      <div className="overflow-hidden">
         <div className="row">
            <div className="col-sm-3 px-5 adminSlider ">
               <div className="pt-3 pb-4">
                  <h2>Aero Mart</h2>
               </div>
               <div className="space-y-4">
                  <div>
                     <Link to="" className="sectionLink no-underline">
                        <h5>Add Product</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="allUser" className="no-underline sectionLink">
                        <h5>All User</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="allReview" className="no-underline sectionLink">
                        <h5>All Review</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="manageOrders" className="no-underline sectionLink">
                        <h5>Manage Orders</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="manageProducts" className="no-underline sectionLink">
                        <h5>Manage Products</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="makeAdmin" className="no-underline sectionLink">
                        <h5>Make Admin</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="/dashboard" className="no-underline sectionLink">
                        <h5>Dashboard</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="/" className="no-underline sectionLink">
                        <h5>Home</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="/login" className="no-underline sectionLink">
                        <h5 onClick={handleSignOut}>{user.email && "LogOut"}</h5>
                     </Link>
                  </div>

               </div>
            </div>
            <div className="col-sm-9 ad">
               <Outlet/>
            </div>
         </div>
      </div>
   );
};

export default Admin;