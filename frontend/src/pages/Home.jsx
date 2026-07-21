import React from 'react';

import Navbar from '../components/navbar/Navbar.jsx'
import Hero from '../components/hero/Hero.jsx';
import Stats  from '../components/statsSection/Stats.jsx';
import Category from '../components/category/Category.jsx';
import BestSellingProducts from '../components/bestSellingproducts/BestSellingProducts.jsx';


const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Stats></Stats>
        <Category></Category>
        <BestSellingProducts></BestSellingProducts>
    </div>
  )
}

export default Home