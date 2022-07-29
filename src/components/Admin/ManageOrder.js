import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table, NavDropdown} from 'react-bootstrap';


const ManageOrder = () => {

   const [ordered, setOrdered] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(()=> {
      fetch('https://secure-sands-07325.herokuapp.com/purchase')
      .then(res => res.json())
      .then(data => {
         setOrdered(data)
         setLoading(true)
      })
   },[ordered])

   const handleClickDropdown = (e, id) => {
      const newStatus = {
         status: e
      }
      fetch(`https://secure-sands-07325.herokuapp.com/purchase/${id}`,{
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newStatus)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
      })
   }


   const handleDeleteOrder = (id) => {
      const proceed = window.confirm("Are you sure you want to delete?");
      if(proceed){
         fetch(`https://secure-sands-07325.herokuapp.com/purchase/${id}`,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount>0){
               const filter = ordered.filter(order => order._id !== id)
               setOrdered(filter)
            }
         })
      }
   }

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Manage Order</h2>
         </div>

         {!loading &&<div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>}

         <div className="ms-3 mt-4">
            <Table striped bordered hover size="sm">
               <thead>
                  <tr>
                     <th>Customer Name</th>
                     <th>Email</th>
                     <th>Services</th>
                     <th>Payment Status</th>
                     <th>Status</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               {
                  ordered.map(item => 
                  <tbody key={item._id}>
                     <tr>
                        <td>{item.customerName}</td>
                        <td>{item.email}</td>
                        <td>{item.carModelName}</td>
                        <td>{item.paymentType}</td>
                        <td>
                           <NavDropdown title={item.status} id="collasible-nav-dropdown">
                              <NavDropdown.Item onClick={() => handleClickDropdown('Pending',item._id)}> Pending</NavDropdown.Item>
                              <NavDropdown.Item onClick={() => handleClickDropdown('OnProcess',item._id)}> OnProcess</NavDropdown.Item>
                              <NavDropdown.Item onClick={() => handleClickDropdown('Done',item._id)}> Done</NavDropdown.Item>
                           </NavDropdown>
                        </td>
                        <td> <button onClick={() => handleDeleteOrder(item._id)}>Delete</button> </td>
                     </tr>
                  </tbody>)
               }
            </Table>
         </div>
      </div>
   );
};

export default ManageOrder;