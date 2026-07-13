import React from 'react'
import logo from '../../assets/logo.png'
import navbarStyle from './navbarStyle.module.css'
import {FaPhoneAlt , FaMapMarkerAlt} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={navbarStyle.logodiv}>

        
        <section className={navbarStyle.logoBlock}>
            {/* Logo */}
            <img src={logo} alt="Bhagyashree Enterprices logo"></img>

            {/* Navigation Links */}
            <ul className={navbarStyle.navLinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Brands</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>

            </ul>

            {/* contact section */}
            <span className={navbarStyle.contactSection}>

                {/* <span className={navbarStyle.phone} >
                    <FaPhoneAlt></FaPhoneAlt>
                    <span>+91 9606697298</span>

                </span> */}

                {/* direct link to the contacts */}
                <a href="tel:+919606697298" className={navbarStyle.phone}>
                    <FaPhoneAlt></FaPhoneAlt>
                    <div className={navbarStyle.phoneText}>
                        <span>Call us</span>
                        <span>+91 9606697298</span>
                        
                    </div>
                    
                </a>

                <span className={navbarStyle.location}>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <a href="https://maps.app.goo.gl/YourGoogleMapsLink" target='_blank' rel='noopener noreferrer'>Belgaum</a>

                </span>

            </span>











      
      

        </section>
    </div>
  )
}

export default Navbar