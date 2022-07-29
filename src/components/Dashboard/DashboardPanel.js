import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom'

const DashboardPanel = () => {

   const { user } = useAuth();
   const [orderList, setOrderList] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(()=> {
      fetch(`https://secure-sands-07325.herokuapp.com/purchaseEmail?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
         setOrderList(data)
         setLoading(true)
      })
   },[user.email, orderList])

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Dashboard</h2>
         </div>

         <div className="ms-3 mt-4">
         {!loading &&<div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>}
            <div className="allCards mr-6">
               {
                  orderList.map( order => 
                  <div key={order._id}>
                     <div>
                        <div className="position-relative orderImage">
                           <img className="img-fluid" src={order.image} alt="img" />
                           <div className="statusCode">
                              <span className={order.status === 'Pending' ? "pendingColor" : order.status === 'OnProcess' ? "onProcessColor" : order.status === 'Done' ? "doneColor" : "doneColor"}>{order.status}</span>
                           </div>
                        </div>
                        <div className="flex justify-content-between align-items-center my-3">
                           <div>
                              <h5 className="textColor1">{order.carModelName}</h5>
                           </div>
                           <Link to={`/dashboard/bookNow/${order._id}`}>
                           <div>
                              {order.status === 'Pending' ?  <button className="btn-button">Order Now</button> :""}
                           </div>
                           </Link>
                        </div>
                     </div>
                  </div>)
               }
            </div>
         </div>
      </div>
   );
};

export default DashboardPanel;