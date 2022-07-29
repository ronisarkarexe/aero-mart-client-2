import React from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Shear/Header/Header';


const Profile = () => {

   const { user } = useAuth();

   return (
      <div>
         <Header/>
         <div className="md:container md:mx-auto">
            <h3 className="mt-5 mb-2">Profile Info:</h3>

            <div>
               <h6>Name: <span className="text-secondary">{user.displayName}</span></h6>
               <h6>Email: <span className="text-secondary">{user.email}</span></h6>
               <h6>Image</h6>
               <img src={user.photoURL} alt="img" />
            </div>
         </div>
      </div>
   );
};

export default Profile;