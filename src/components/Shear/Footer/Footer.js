import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png'

const Footer = () => {
   return (
      <div className="bg-gray-800 text-gray-300">
         <div className="md:container md:mx-auto py-5">
            <div className="row">
               <div className="col-sm-4">
                  <h4 className="textColor1">Location</h4>
                  <p>H#000(0th Floor). Road #000 Rajkot, <br /> Gujarat India.</p>
                  <img className="mt-4" src={logo} alt="logo" />
               </div>
               <div className="col-sm-2">
                  <h4 className="textColor1">Company</h4>
                  <p>About</p>
                  <p>Project</p>
                  <p>Our Products</p>
                  <p>Terms Conditions</p>
               </div>
               <div className="col-sm-2 text-gray-300">
                  <h4 className="textColor1">Quick Links</h4>
                  <p>Rentals</p>
                  <p>Sales</p>
                  <p>Contact</p>
                  <p>Our blogs</p>
               </div>
               <div className="col-sm-4">
                  <h4 className="textColor1">About us</h4>
                  <p>We work with Aero Mart. Save up to 70% on your insurance by buying for us. Our policies have the highest settlement ratio. For more info on your options please visit: <Link to="https://aeromart-5f343.web.app">Aero Mart</Link></p>

                  <div className="textColor1">
                     <Link to="www.facebook.com">
                        <i className="fa-brands fa-facebook fs-2"></i>
                     </Link>
                     <Link to="www.instagram.com">
                        <i className="fa-brands fa-instagram mx-4 fs-2"></i>
                     </Link>
                     <Link to="www.youtube.com">
                        <i className="fa-brands fa-youtube fs-2"></i>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;