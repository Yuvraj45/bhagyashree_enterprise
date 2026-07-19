import React from 'react'
import heroStyle from './hero.module.css';
import { GoArrowRight } from "react-icons/go";
import { FiShield } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";




const Hero = () => {
  return (
    <div className={heroStyle.hero}>
      <section className={heroStyle.rightSection}>
        <section className={heroStyle.heroOverlay}>
          <span>BUILDING YOUR DREAMS</span>
          <h1>
            Quality Materials <br />
            <span>Stronger Foundations.</span>
          </h1>
          
          <p> Your one-stop destination for construction materials  and hardware.<br />Trusted brands, Guaranteed quality.</p>

          {/* services */}
          <div className={heroStyle.features }>
            <span className={heroStyle.featureCard}>
              <FiShield className={heroStyle.featureIcon}/>
              <span>100%</span>
              <span className={heroStyle.textMar}>Genuine</span>
                {/* <p>Trusted Brands Only</p> */}
              
            </span>

            <span className={heroStyle.featureCard}>
              <TbTruckDelivery className={heroStyle.featureIcon}/>
              <span>fast </span>
              <span className={heroStyle.textMar}>Delivery</span>
                {/* <p>Across the City</p> */}
              
            </span>

            <span className={heroStyle.featureCard}>
              < MdSupportAgent className={heroStyle.featureIcon}/>
              
              <span>Expert </span>
              <span className={heroStyle.textMar}>Support</span>
                {/* <p>Always Here</p> */}
              
            </span>

            <span className={heroStyle.featureCard}>
              < RiPriceTag3Line className={heroStyle.featureIcon}/>
              
              <span >Best Prices </span>
              <span className={heroStyle.textMar}>Guaranteed</span>
                {/* <p>Always Here</p> */}
              
            </span>
          </div>


          <div className={heroStyle.heroButtons}>
            <button className={heroStyle.primaryBtn}>View Products <GoArrowRight className={heroStyle.RightIcon}></GoArrowRight>  </button>
            <button className={heroStyle.secondaryBtn}>Get a Quote <GoArrowRight className={heroStyle.RightIcon}></GoArrowRight></button>

          </div>






        </section>

      </section>

    </div>
  )
}

export default Hero