import React from 'react'
import style from './f_brandstyle.module.css'
import cement from '../../assets/BrandUltratechCement.png'
import steel from '../../assets/BrandTataSteel.jpg'
import pipes from '../../assets/BrandFinolex.png'
import asianpaint from '../../assets/BrandAsianPaint.jpg'
import jaguar from '../../assets/BrandJaguar.avif'

// this import is for css
import Marquee from "react-fast-marquee";

const F_Brand = () => {
    const brands = [
        {
            image: cement
        },
        {
            image: steel
        },
        {
            image: pipes
        },
        {
            image: asianpaint
        },
        {
            image: jaguar
        },
    ];
    return (
        <div className={style.brandmainsection}>
            <section className={style.brandcontainer}>
                <h2 className={style.brandheading}>
                    Our Trusted Brands
                </h2>

                <Marquee
                    speed={40}
                    gradient={false}
                    pauseOnHover={true}
                    direction="left"
                    autoFill={true}
                >
                    {brands.map((item, index) => (
                        <div key={index} className={style.cardsItem}>
                            <img
                                src={item.image}
                                alt="Brand Logo"
                                className={style.cardsImage}
                            />
                        </div>
                    ))}
                </Marquee>
            </section>
        </div>
    )
}

export default F_Brand
