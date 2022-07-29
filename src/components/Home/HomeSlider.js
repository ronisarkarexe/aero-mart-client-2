import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'

const HomeSlider = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   return (
      <div className="bg-gray-200">
         <div className="vh-100">
            <Carousel activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                  <img className="d-block w-100 vh-100" src={img1} alt="First slide" />
               </Carousel.Item>

               <Carousel.Item>
                  <img className="d-block w-100 vh-100" src={img2} alt="Second slide" />
               </Carousel.Item>

               <Carousel.Item>
                  <img className="d-block w-100 vh-100" src={img3} alt="Third slide" />
               </Carousel.Item>

            </Carousel>
         </div>
      </div>
   );
};

export default HomeSlider;