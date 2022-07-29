import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";

import initializeAuthentication from '../components/Firebase/firebase.init';
initializeAuthentication()

const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
   const auth = getAuth();
   const [user, setUser] = useState({})
   const [error, setError] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const [admin, setAdmin] = useState(false)

   const handleCreateUser = (email, password, name, navigate, navigate_url) => {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
         const update = {email, displayName: name}
         saveUser(email, name, 'POST')
         setUser(update)
         updateUserProfile(name)
         navigate(navigate_url)
         setError('')
      })
      .catch((error) => {
         setError(error.message)
      })
      .finally(() => setIsLoading(false))
   }

   const handleSignInUser = (email, password, navigate, navigate_url) => {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
         console.log(result.user)
         navigate(navigate_url)
         setError('')
      })
      .catch((error) => {
         setError(error.message)
      })
      .finally(() => setIsLoading(false))
   }

   const handleGoogleSignedIn = (navigate, navigate_url) => {
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
         const user = result.user;
         saveUser(user.email, user.displayName, 'PUT')
         navigate(navigate_url)
         setError('')
      })
      .catch((error) => {
         setError(error.message)
      })
      .finally(() => setIsLoading(false))
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user){
            setUser(user)
            getIdToken(user)
            .then(idToken => localStorage.setItem('idToken', idToken))
         }
         else{
            setUser({})
         }
         setIsLoading(false)
      })
      return () => unsubscribe;
   },[auth])


   const updateUserProfile = (name) => {
      updateProfile(auth.currentUser, {
         displayName: name,
       }).then(() => {
         
       }).catch((error) => {
         
       });
   }

   const forgetPassword = (email) => {
      return sendPasswordResetEmail(auth, email)
   }

   const handleSignOut = () => {
      signOut(auth)
      .then(() => {
         setUser({})
      })
      .catch((error) => {

      })
   }

   const saveUser = (email, name, method) => {

      const newData = {
         email, displayName: name
      }

      fetch('https://secure-sands-07325.herokuapp.com/users',{
         method: method,
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newData)
      })
   }

   useEffect(()=> {
      fetch(`https://secure-sands-07325.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
   },[user.email])

   return {
      user,
      error,
      admin,
      isLoading,
      handleSignOut,
      forgetPassword,
      handleCreateUser,
      handleSignInUser,
      handleGoogleSignedIn
   }
};

export default useFirebase;