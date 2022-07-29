import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';


const Dashboard = () => {

   const { admin, user, handleSignOut } = useAuth()

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
                        <h5>Dashboard</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="orderList" className="no-underline sectionLink">
                        <h5>Order List</h5>
                     </Link>
                  </div>

                  <div>
                     <Link to="review" className="no-underline sectionLink">
                        <h5>Review</h5>
                     </Link>
                  </div>

                  {admin && <div>
                     <Link to="/admin" className="no-underline sectionLink">
                        <h5>Admin</h5>
                     </Link>
                  </div>}

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

export default Dashboard;