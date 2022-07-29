import React from 'react';
import Header from '../Shear/Header/Header';
import HomeSlider from './HomeSlider';
import OurProducts from './OurProducts';
import './Home.css'
import Review from './Review';
import Footer from '../Shear/Footer/Footer';
import CompanyOverview from './CompanyOverview';
import HowToBuy from './HowToBuy';
import SubscribeUs from './SubscribeUs';
const Home = () => {
   return (
      <div>
         <Header/>
         <HomeSlider/>
         <OurProducts/>
         <SubscribeUs/>
         <CompanyOverview/>
         <HowToBuy/>
         <Review/>
         <Footer/>
      </div>
   );
};

export default Home;