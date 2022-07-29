import React, { useState } from 'react';
import { useEffect } from 'react';
import AllProductDetails from './AllProductDetails';
import Header from '../Shear/Header/Header'
import Footer from '../Shear/Footer/Footer';

const ExploreAll = () => {

   const [allProduct, setAllProduct] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(()=> {
      fetch('https://secure-sands-07325.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
         setAllProduct(data)
         setLoading(true)
      })
   },[])

   return (
      <>
         <Header/>
         <div className="my-3">
            <div className="md:container md:mx-auto">
               <h2 className="mb-4 pt-4 textColor1">FEATURED CARS</h2>
               {!loading &&<div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>}
               <div className="allCards mt-5 mb-5">
                  {
                     allProduct.map(product => <AllProductDetails product={product} key={product._id}></AllProductDetails>)
                  }
               </div>
            </div>
         </div>
         <Footer/>
      </>
   );
};

export default ExploreAll;