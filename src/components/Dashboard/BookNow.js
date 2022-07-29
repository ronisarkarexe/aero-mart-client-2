import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const BookNow = () => {
   const { id } = useParams()
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [bookNow, setBookNow] = useState({})
   const MySwal = withReactContent(Swal);
   const navigate = useNavigate()

   useEffect(() => {
      fetch(`https://secure-sands-07325.herokuapp.com/purchase/${id}`)
      .then(res => res.json())
      .then(data => setBookNow(data))
   },[id, bookNow])

   const onSubmit = data => {
      const newDate = {
         ...data,
         ...bookNow
      }
      fetch(`https://secure-sands-07325.herokuapp.com/OrderPurchase/${id}`,{
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newDate)
      })
      .then(res => res.json())
      .then(data => {
         if(data.matchedCount>0){
            MySwal.fire(
               'Thank You!',
               'You Payment has been successfully Done!',
               'success'
               )
               .then(() => {
               return navigate('/dashboard')
            })
         }
      })
   };

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Purchase Now</h2>
         </div>

         <div className="ms-3 mt-4">
         <form className="w-50 space-y-2" onSubmit={handleSubmit(onSubmit)}>

            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Car Model Name" defaultValue={bookNow.customerName} {...register("customerName")} disabled/>

            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Car Brand Name" defaultValue={bookNow.email} {...register("email")} disabled/>

            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="color" defaultValue={bookNow.carModelName} {...register("carModelName")} disabled/>

            <input type="submit" value="Purchase Now" className="buttonBg cursor-pointer font-normal rounded w-full py-2 px-3 focus:outline-none"/>

            </form>
         </div>
      </div>
   );
};

export default BookNow;