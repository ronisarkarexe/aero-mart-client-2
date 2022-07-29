import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../../image/img_avatar.png'

const Review = () => {

   const [review, setReview] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
    fetch('https://secure-sands-07325.herokuapp.com/reviewMsg')
    .then(res => res.json())
    .then(data => {
      setReview(data)
      setLoading(true)
    })
   }, [])

   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   };
   
   return (
      <div className="md:container md:mx-auto my-5">
         <div className="my-5">
            <h2 className="text-uppercase text-center textColor1">Our Customer Review</h2>
         </div>
            {!loading &&<div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
            </div>}
         <Slider {...settings}>
          {
            review.map( view => 
            <div key={view._id}>
               <div className="reviewCard mx-3 m-4 rounded">
                  <div className="p-4">
                    <div className="d-flex justify-content-center">
                      <img className="rounded-full" src={view.photoURL? view.photoURL : img} alt="img" />
                    </div>

                    <div className="text-center mt-4">
                      <h5>{view.name}</h5>
                      <p className="text-align-justify">{view.description.slice(0, 200)}</p>
                    </div>
                  </div>
               </div>
            </div>)
          }
        </Slider>
      </div>
   );
};

export default Review;