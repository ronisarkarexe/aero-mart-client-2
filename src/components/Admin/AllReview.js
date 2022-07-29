import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const AllReview = () => {

   const [allReview, setAllReview] = useState([])
   const [loading, setLoading] = useState(false)
   useEffect(()=> {
      fetch('https://secure-sands-07325.herokuapp.com/reviewMsg')
      .then(res => res.json())
      .then(data => {
         setAllReview(data)
         setLoading(true)
      })
   },[])

   const handleReviewFromUser = (id) => {
      const proceed = window.confirm("Are you sure you want to delete?");
      if(proceed){
         fetch(`https://secure-sands-07325.herokuapp.com/reviewMsg/${id}`,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount>0){
               const filter = allReview.filter(order => order._id !== id)
               setAllReview(filter)
            }
         })
      }
   }

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">All Review</h2>
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
                     <th>Star</th>
                     <th>Description</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               {
                  allReview.map(review => 
                  <tbody key={review._id}>
                     <tr>
                        <td>{review.name}</td>
                        <td>{review.email}</td>
                        <td>{review.star}</td>
                        <td>{review.description.slice(0, 25)}</td>
                        <td><button onClick={() => handleReviewFromUser(review._id)}>Delete</button> </td>
                     </tr>
                  </tbody>)
               }
            </Table>
         </div>
      </div>
   );
};

export default AllReview;