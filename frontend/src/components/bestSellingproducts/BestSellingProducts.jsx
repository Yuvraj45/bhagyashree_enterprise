import React from 'react'
import productSty from './bestSellingProducts.module.css'
import { GoArrowRight } from "react-icons/go";
import {Swiper , SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Images
import cement from "../../assets/cement.png";
import paint from "../../assets/paint.png";
import pipe from "../../assets/pipe.png";
import iron from "../../assets/iron.png";
import tap from "../../assets/tap.png";
import commode from "../../assets/commode.png";

const BestSellingProducts = () => {
  const products =[
    {
      id : 1,
      image : cement,
      name : "UltraTech OPC 53 Grade Cement (50kg)",
      price :"₹385.00"
    },

    {
      id : 2,
      image : paint,
      name : "Asian Paints Apex Ultima (20L)",
      price :"₹6,450.00"
    },

    {
      id : 3,
      image : pipe,
      name : "Prince UPVC Pipe (6 Meter)",
      price :"₹185.00"
    },

    {
      id : 4,
      image : iron,
      name : "Tata TMT 550 SD (12mm)",
      price :"₹61.50 / Kg"
    },

    {
      id : 5,
      image : tap,
      name : "Jaquar Pillar Cock Continental",
      price :"₹1,250.00"
    },

    {
      id : 6,
      image : commode,
      name : "Parryware EWC (White)",
      price :"₹2,750.00"
    },
    {
      id : 7,
      image : tap,
      name : "Jaquar Pillar Cock Continental",
      price :"₹1,250.00"
    },

    {
      id : 8,
      image : commode,
      name : "Parryware EWC (White)",
      price :"₹2,750.00"
    },
  ];
  return (
    <div>
      <div className={productSty.mainSellBox}>

        <p className={productSty.FeaturePr}>FEATURED PRODUCTS</p>

        <div className={productSty.secondMainSpan}>
          <h2 className={productSty.secondTextStyle}>Best Selling produdts</h2>
          <button className={productSty.buttStyle}>View All Products  <GoArrowRight></GoArrowRight></button>
        </div>
        
        {/* product cards */}
        <div className={productSty.sliderContainer}>
          <button className={`custom-prev ${productSty.arrowBtn}`}>
            <FaArrowLeft />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={20}
            slidesPerView={6}
          >
            {products.map((product)=>(
              <SwiperSlide key={product.id}>
                <div className={productSty.card}>
                  <img src={product.image} alt={product.name}/>
                  <h3>{product.name}</h3>

                  <h4>{product.price}</h4>

                  <button>Add to Enquiry</button>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

          <button className={`custom-next ${productSty.arrowBtn}`}>
            <FaArrowRight />
          </button>

        </div>
        
        
        {/* swiper we are using to give atoumativ navigation left and write */}

      </div>
    </div>
  )
}

export default BestSellingProducts