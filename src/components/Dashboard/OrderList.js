import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from 'react-bootstrap/Table';


const OrderList = () => {
   
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
   },[user.email])

   const handleDeleteOrder = (id) => {
      const proceed = window.confirm("Are you sure you want to delete?");
      if(proceed){
         fetch(`https://secure-sands-07325.herokuapp.com/purchase/${id}`,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount>0){
               const filter = orderList.filter(order => order._id !== id)
               setOrderList(filter)
            }
         })
      }
   }


   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Order List</h2>
         </div>

         {!loading &&<div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>}

         <div className="ms-3 mt-4">
            <Table striped bproduct hover size="sm">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Product Name</th>
                     <th>Status</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               {
                  orderList.map(item => 
                  <tbody key={item._id}>
                     <tr>
                        <td>{item.customerName}</td>
                        <td>{item.email}</td>
                        <td>{item.carModelName}</td>
                        <td>{item.status}</td>
                        <td>{item.status === 'Done' ? "" :<button onClick={() => handleDeleteOrder(item._id)}>Delete</button>}</td>
                     </tr>
                  </tbody>)
               }

            </Table>
         </div>
      </div>
   );
};

export default OrderList;