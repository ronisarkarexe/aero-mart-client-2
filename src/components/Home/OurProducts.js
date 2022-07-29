import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom'

const OurProducts = () => {

   const [ products, setProducts ] = useState([])
   const [loading, setLoading] = useState(false)
   useEffect(()=> {
      fetch('https://secure-sands-07325.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
         setProducts(data.slice(0, 6))
         setLoading(true)
      })
   },[])


   return (
      <div className="mt-5">
         <div className="md:container md:mx-auto">
            <h2 className="mb-4 pt-4 text-center textColor1">FEATURED CARS</h2>
            {!loading && <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>}
            <div className="allCards">
               {
                  products.map(product => <ProductDetails product={product} key={product._id}></ProductDetails>)
               }
            </div>

            <div className="text-center my-5">
               <Link to="/exploreAll">
               <button className="btn-button">Explore All</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default OurProducts;