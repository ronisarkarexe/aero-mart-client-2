import React from 'react';
import { Link } from 'react-router-dom'

const AllProductDetails = ({product}) => {

   const { _id, carModelName, price, image } = product;

   return (
      <Link to={`/shop/${_id}`}>
         <div className="productCart">
            <img className="image" src={image} alt="img" />
            <div className="middle textColor1">
               <div>
                  <h3>{carModelName}</h3>
                  <h5>Price: ₹{price}</h5>
                  <div>
                     <span>CheckOut For More Details...</span>
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default AllProductDetails;