import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
   const [imageBb, setImageBb] = useState('')
   const [date, setDate] = useState(new Date())

   const { register, handleSubmit, reset, formState: { errors } } = useForm();

   const handleImageUpload = (e) => {
      let body = new FormData()
      body.set('key', '7f929e96c72d7b41512d485755611ed8')
      body.append('image', e.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', body)
      .then(function (response) {
         setImageBb(response.data.data.display_url);
      })
      .catch(function (error) {
         console.log(error);
      });
   }
   
   const onSubmit = data => {
      const newDate = {
         ...data,
         image: imageBb,
         date: date.toDateString(),
      }
      
      axios.post('https://secure-sands-07325.herokuapp.com/products', newDate)
      .then(function (data) {
         if(data.data.insertedId){
            alert('Data inserted successfully')
            reset()
         }
      })
      .catch(function (error) {
         console.log(error);
      });
   };

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Add Product</h2>
         </div>

         <div className="ms-3 mt-4">
            <form className="w-50 space-y-2" onSubmit={handleSubmit(onSubmit)}>

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Car Model Name" {...register("carModelName", { required: true })} />

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Car Brand Name" {...register("carBrand", { required: true })} />

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="color" {...register("color", { required: true })} />

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Liquid" {...register("liquid", { required: true })} />

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Price" {...register("price", { required: true })} />

               <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Description" {...register("description", { required: true })} />

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="8" cols="50" type="file" onChange={handleImageUpload} required/>
               

               <input type="submit" value="Submit" className="buttonBg cursor-pointer font-normal rounded w-full py-2 px-3 focus:outline-none"/>

            </form>
         </div>
      </div>
   );
};

export default AddProduct;