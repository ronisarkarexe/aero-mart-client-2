import React from 'react';

const SubscribeUs = () => {
   return (
      <div className="backgroundColorBody">
         <div className="md:container md:mx-auto py-5">
            <div className="row">
               <div className="col-sm-6 textColor1">
                  <h2>Subscribe Us</h2>
               </div>
               <div className="col-sm-6 d-flex">
               <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="email" placeholder="Enter Your Name" required />
               <button className="btn-button">Subscribe</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SubscribeUs;