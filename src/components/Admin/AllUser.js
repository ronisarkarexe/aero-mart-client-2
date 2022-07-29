import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const AllUser = () => {

   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      fetch('https://secure-sands-07325.herokuapp.com/users')
      .then(res => res.json())
      .then(data => {
         setUsers(data)
         setLoading(true)
      })
   },[])

   const handleDeleteUser = (id) => {
      const proceed = window.confirm("Are you sure you want to delete?");
      if(proceed){
         fetch(`https://secure-sands-07325.herokuapp.com/users/${id}`,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount>0){
               const filter = users.filter(order => order._id !== id)
               setUsers(filter)
            }
         })
      }
   }

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">All User</h2>
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
                     <th>User Name</th>
                     <th>Email</th>
                     <th>Role</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               {
                  users.map(user => 
                  <tbody key={user._id}>
                     <tr>
                        <td>{user.displayName}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td><button onClick={() => handleDeleteUser(user._id)}>Delete</button> </td>
                     </tr>
                  </tbody>)
               }
            </Table>
         </div>
      </div>
   );
};

export default AllUser;