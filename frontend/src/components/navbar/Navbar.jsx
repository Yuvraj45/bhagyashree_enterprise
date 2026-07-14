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
                    <a href="https://www.google.com/maps/place/Bhagyashree+Enterprises/@15.8920359,74.5028963,17z/data=!4m6!3m5!1s0x3bbf6172fcdd57e3:0xe5c578ffd372f72c!8m2!3d15.8919934!4d74.5027904!16s%2Fg%2F11ghqc2gt2?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" target='_blank' rel='noopener noreferrer'>Belgaum</a>

                </span>

            </span>











      
      

        </section>
    </div>
  )
}

export default Navbar