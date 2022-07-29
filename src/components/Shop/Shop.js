import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Shear/Header/Header';
import './Shop.css'
import useAuth from '../../hooks/useAuth';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Shop = () => {
   const { user } = useAuth()
   const [shop, setShop] = useState({})
   const MySwal = withReactContent(Swal);
   const navigate = useNavigate()
   const status = 'Pending'

   const initialInfo = {
      email: user.email,
      customerName: user.displayName
   }

   const [userInfo, setUserInfo] = useState(initialInfo)
   const [shopNow, setShopNow] = useState({})

   const { id } = useParams()
   
   useEffect(()=> {
      fetch(`https://secure-sands-07325.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
         setShop(data)
      })
   },[id])

   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newValue = {
         ...userInfo
      }
      newValue[field] = value;
      setShopNow(newValue)
   }

   const handleSubmitForm = (e) => {
      e.preventDefault()

      const newData = {
         ...shopNow,
         carModelName: shop.carModelName,
         price: shop.price,
         image: shop.image,
         status,
      }

      axios.post('https://secure-sands-07325.herokuapp.com/purchase',newData)
      .then(function (data) {
         console.log(data)
         if(data.data.insertedId){
            MySwal.fire(
               'Thank You!',
               'Successfully submit, go for the next step!',
               'success'
               )
               .then(() => {
               return navigate('/dashboard')
            })
         }
      })
      .catch(function (error) {
         console.log(error);
      });

   }


   return (
      <div>
         <Header/>
         <div className="container mt-5">
            <div className="row">
               <div className="col-sm-6 md-6">
                  <img className="rounded" src={shop.image} alt="img" />

               </div>
               <div className="col-sm-6 md-6 textColor1">
                  <h2>{shop.carModelName}</h2>
                  <h4 className="my-2">Price: ${shop.price}*</h4>
                  <p className="text-secondary">Expected Launch - {shop.date}</p>

                  <div className="mt-5">
                     <h4 className="textColor2">Key of {shop.carModelName}</h4>

                     <div className="d-flex justify-content-around align-items-center mt-4 shopKey py-4 rounded textColor2">
                        <div>
                           <div>
                              <h6>Car Brand</h6>
                              <p className="text-secondary">{shop.carBrand}</p>
                           </div>
                        </div>

                        <div >
                           <h6>Color</h6>
                           <p className="text-secondary">{shop.color}</p>
                        </div>

                        <div >
                           <h6>Fuel</h6>
                           <p className="text-secondary">{shop.liquid}</p>
                        </div>

                        <div >
                           <h6>Car Brand</h6>
                           <p className="text-secondary">{shop.carBrand}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <hr className="borderColor" />

            <div className="mt-5">
               <h5>Details</h5>
               <p className="text-secondary">{shop.description}</p>
            </div>
            
            <div className="AddToCart mt-4 mb-5">
               <h3>Purchase Now:</h3>

               <form className="w-50 space-y-2 mt-3" onSubmit={handleSubmitForm}>

                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="carModelName" disabled defaultValue={shop.carModelName}/>

                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="price" disabled defaultValue={shop.price}/>

                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="customerName" defaultValue={user.displayName} onBlur={handleOnBlur} required/>

                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" defaultValue={user.email} onBlur={handleOnBlur} required/>

                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="phone" placeholder="Phone Number" required onBlur={handleOnBlur}/>

                  <input type="submit" value="Review Now" className="buttonBg cursor-pointer font-normal rounded w-full py-2 px-3 focus:outline-none"/>
               </form>

               {/* <p className="mt-3"> <Link className="no-underline text-secondary" to="/">Save To Card</Link> </p> */}

            </div>
         </div>
      </div>
   );
};

export default Shop;