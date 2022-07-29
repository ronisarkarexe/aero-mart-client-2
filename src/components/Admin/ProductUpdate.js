import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ProductUpdate = () => {
   const [productData, setProductData] = useState({})
   const MySwal = withReactContent(Swal);
   const navigate = useNavigate()
   
   const { id } = useParams()
   const { register, handleSubmit, reset, formState: { errors } } = useForm();

   useEffect(()=> {
      fetch(`https://secure-sands-07325.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
         setProductData(data)
      })
   },[])

   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newValue = {
         ...productData
      }
      newValue[field] = value;
      setProductData(newValue)
   }

   
   const handleUpdateProduct = (e) => {
      e.preventDefault()

      const newData = {
         ...productData
      }
      
      fetch(`https://secure-sands-07325.herokuapp.com/products/${id}`, {
         method: 'PUT',
         headers: { 
            'content-Type': 'application/json'
         },
         body: JSON.stringify(newData)
      })
      .then(res => res.json())
      .then(data => {
         if(data.matchedCount>0){
            MySwal.fire(
               'Good job!',
               'You clicked the button!',
               'success'
               )
               .then(() => {
               return navigate('/admin/manageProducts')
            })
         }
      })
   }

   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Add Product</h2>
         </div>

         <div className="ms-3 mt-4">
            <form className="w-50 space-y-2" onSubmit={handleUpdateProduct}>

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Car Model Name" {...register("carModelName")} defaultValue={productData.carModelName} onBlur={handleOnBlur}/>

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Car Brand Name" {...register("carBrand")} defaultValue={productData.carBrand} onBlur={handleOnBlur}/>

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="color" {...register("color")} defaultValue={productData.color} onBlur={handleOnBlur}/>

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Liquid" {...register("liquid")} defaultValue={productData.liquid} onBlur={handleOnBlur}/>

               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Price" {...register("price")} defaultValue={productData.price} onBlur={handleOnBlur}/>

               <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="8" cols="50" type="text" placeholder="Description" {...register("description")} defaultValue={productData.description} onBlur={handleOnBlur}/>
               
               <input type="submit" value="Submit" className="buttonBg cursor-pointer font-normal rounded w-full py-2 px-3 focus:outline-none"/>

            </form>
         </div>
      </div>
   );
};

export default ProductUpdate;