
import React from 'react'
import stateCard from './stats.module.css'
import { BsBuildingsFill } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";

const Stats = () => {
  return (
    <div className={stateCard.mainBox}>
      <section className={stateCard.secondbox}>

        <div className={stateCard.stateCards}>
          <BsBuildingsFill className={stateCard.stateImage}></BsBuildingsFill>
          <div className={stateCard.stateText}>
            <span>10+</span>
            <span>Years of Experience</span>
          </div>
        </div>

        <div className={stateCard.stateCards}>
          <MdOutlinePerson className={stateCard.stateImage}></MdOutlinePerson>
          <div className={stateCard.stateText}>
            <span>5000+</span>
            <span>Happy Customers</span>
          </div>
        </div>

        <div className={stateCard.stateCards}>
          <AiOutlineProduct className={stateCard.stateImage}></AiOutlineProduct>
          <div className={stateCard.stateText}>
            <span>1000+</span>
            <span>Products</span>
          </div>
        </div>

        <div className={stateCard.stateCards}>
          <MdOutlinePlace className={stateCard.stateImage}></MdOutlinePlace>
          <div className={stateCard.stateText}>
            <span>Serving</span>
            <span>Belgaum & Surroundings</span>
          </div>
        </div>
        

      </section>


    </div>
  )
}

export default Stats