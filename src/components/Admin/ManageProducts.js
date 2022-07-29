import React, { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

const ManageProducts = () => {

   const [product, setProduct] = useState([])
   const [loading, setLoading] = useState(false)
   useEffect(()=> {
      fetch('https://secure-sands-07325.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
         setProduct(data)
         setLoading(true)
      })
   },[])


   const handleDeleteProduct = (id) => {
      const proceed = window.confirm("Are you sure you want to delete?");
      if(proceed){
         fetch(`https://secure-sands-07325.herokuapp.com/products/${id}`,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount>0){
               const filter = product.filter(order => order._id !== id)
               setProduct(filter)
            }
         })
      }
   }

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Manage Products</h2>
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
                     <th>Brand Name</th>
                     <th>Price</th>
                     <th>Fuel</th>
                     <th>Update</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               {
                  product.map(item => 
                  <tbody key={item._id}>
                     <tr>
                        <td>{item.carModelName}</td>
                        <td>{item.carBrand}</td>
                        <td>{item.price}</td>
                        <td>{item.liquid}</td>
                        <td><Link to={`/admin/update/${item._id}`}><button>Update</button></Link></td>
                        <td><button onClick={() => handleDeleteProduct(item._id)}>Delete</button> </td>
                     </tr>
                  </tbody>)
               }
            </Table>
         </div>
      </div>
   );
};

export default ManageProducts;