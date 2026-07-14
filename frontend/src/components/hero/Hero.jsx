import React from 'react'
import heroStyle from './hero.module.css';
import { GoArrowRight } from "react-icons/go";
import { FiShield } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";




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
          
          <p> Your one-stop destination for construction materials <br /> and hardware.Trusted brands, Guaranteed quality.</p>

          <div className={heroStyle.heroButtons}>
            <button className={heroStyle.primaryBtn}>View Products <GoArrowRight className={heroStyle.RightIcon}></GoArrowRight>  </button>
            <button className={heroStyle.secondaryBtn}>Contact Us <GoArrowRight className={heroStyle.RightIcon}></GoArrowRight></button>

          </div>

          <div className={heroStyle.features}>
            <span className={heroStyle.featureCard}>
              <FiShield className={heroStyle.featureIcon}/>
              <div>
                <h4>100% Genuine </h4>
                <p>Trusted Brands Only</p>
              </div>
            </span>

            <span className={heroStyle.featureCard}>
              <TbTruckDelivery className={heroStyle.featureIcon}/>
              <div>
                <h4>fast Delivery</h4>
                <p>Across the City</p>
              </div>
            </span>
            <span className={heroStyle.featureCard}>
              < MdSupportAgent className={heroStyle.featureIcon}/>
              <div>
                <h4>Expert Support</h4>
                <p>Always Here</p>
              </div>
            </span>
          </div>



        </section>

      </section>

    </div>
  )
}

export default Hero