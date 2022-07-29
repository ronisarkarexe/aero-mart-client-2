import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

const MakeAdmin = () => {

   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const navigate = useNavigate()

   const onSubmit = (data) => {
      fetch('https://secure-sands-07325.herokuapp.com/users/admin',{
         method: 'PUT',
         headers: { 
            'authorization' : `Bearer ${localStorage.getItem('idToken')}`,
            'content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
         if(data.modifiedCount>0){
            alert('Successfully Created Admin');
            navigate('/admin/allUser')
         }
      })
   }
   return (
      <div>
         <div className="headingTitle">
            <h2 className="my-3 ms-4">Make Admin</h2>
         </div>

         <div className="ms-3 mt-4">
            <form className="w-50 space-y-2" onSubmit={handleSubmit(onSubmit)}>

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Enter Email" {...register("email", { required: true })} />

            <input type="submit" value="Submit" className="buttonBg cursor-pointer font-normal rounded w-full py-2 px-3 focus:outline-none"/>

            </form>
         </div>
      </div>
   );
};

export default MakeAdmin;