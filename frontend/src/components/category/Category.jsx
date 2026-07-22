import React from "react";
import category from './categorystyle.module.css'
import Cement from '../../assets/Cementbag.png'
import Paint from '../../assets/paint.png'
import Pipe from '../../assets/Pipe.png'
import Rod from '../../assets/Rod.png'
import Taap from '../../assets/Taap.png'


const Category = () => {
	const categories = [
		{
			name: "Paints",
			description: "Premium interior and exterior paints.",
			image: Paint
		},
		{
			name: "Cements",
			description: "Strong and durable cement for construction.",
			image: Cement
		},
		{
			name: "Iron",
			description: "Strong and durable iron materials.",
			image: Rod
		},
		{
			name: "PVC Pipes",
			description: "Reliable piping solutions.",
			image: Pipe
		},
		{
			name: "Bathware",
			description: "Modern bathroom fittings.",
			image: Taap
		},
	];
	return (

		<div className={category.mainsection}>
			<section className={category.container}>
				<h2 className={category.heading}>
					Shop By Category
				</h2>
				<div className={category.card}>
					{categories.map((item) => {
						return(
							<div key={item.name} className={category.cardItem}>
								<img src={item.image} alt={item.name} className={category.cardImage}/>
								<h3 className={category.cardTitle}>
									{item.name}
								</h3>

								<p className={category.cardDes}>
									{item.description}
								</p>
							</div>
						);
					})}
				</div>
			</section>

		</div>
		
	)

}

export default Category