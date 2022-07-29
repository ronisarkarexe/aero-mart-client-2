import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const Review = () => {
   const { user } = useAuth()
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const MySwal = withReactContent(Swal);
   const navigate = useNavigate()

   const [star, setStar] = useState({})

   const handleOnBlur = (e) => {
      const newDate = {
         ...star
      }
      newDate[e.target.name] = e.target.value;
      setStar(newDate)
   }

   const onSubmit = data => {
      const newData = {
         ...data,
         photoURL: user.photoURL,
         star: star.star
      }

      axios.post('https://secure-sands-07325.herokuapp.com/reviewMsg',newData)
      .then(function (data) {
         console.log(data)
         if(data.data.insertedId){
            MySwal.fire(
               'Wow..!',
               'Thank You! for your Feedback.',
               'success'
               )
               .then(() => {
               return navigate('/')
            })
         }
      })
      .catch(function (error) {
         console.log(error);
      });
   };

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Give Your Feedback</h2>
         </div>

         <div className="ms-3 mt-4">
         <form className="w-50 space-y-2" onSubmit={handleSubmit(onSubmit)}>

            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Enter Your Name" {...register("name")} required />

            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Enter Your Email" {...register("email")} required />

            <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Description" rows="8" cols="50" name="description" {...register("description")} required />

            <label htmlFor="customRange2" className="form-label">Star Rating 1 to 5</label>
            <input type="range" name="star" className="form-range" min="0" max="5" id="customRange2" onBlur={handleOnBlur} required></input>

            <input type="submit" value="Submit" className="buttonBg cursor-pointer font-normal rounded w-full py-2 px-3 focus:outline-none"/>

            </form>
         </div>
      </div>
   );
};

export default Review;