import React from 'react';

import Navbar from '../components/navbar/Navbar.jsx'
import Hero from '../components/hero/Hero.jsx';
import Stats  from '../components/statsSection/Stats.jsx';
import Category from '../components/category/Category.jsx';


const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Stats></Stats>
        <Category></Category>
    </div>
  )
}

export default Home