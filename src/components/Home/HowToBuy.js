import React from 'react';

const HowToBuy = () => {
   return (
      <div className="backgroundColorBody">
         <div className="md:container md:mx-auto">
            <div className="row py-5">
               <div className="col-sm-6 d-flex align-items-center textColor1">
                  <h2>How to buy a car?</h2>
               </div>
               <div className="col-sm-6">
                  <p><i className="fa-solid fa-circle-check textColor1"></i> best deals</p>
                  <p><i className="fa-solid fa-circle-check textColor1"></i> sell your car</p>
                  <p><i className="fa-solid fa-circle-check textColor1"></i> car book values</p>
                  <p><i className="fa-solid fa-circle-check textColor1"></i> car dealers</p>
                  <p><i className="fa-solid fa-circle-check textColor1"></i> compare prices</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HowToBuy;