import React from "react";
import category from './category.module.css'

const Category = () => {
	const categories = [
		{ name: "Paints" },
		{ name: "Cements" },
		{ name: "Iron" },
		{ name: "PVC Pipes" },
		{ name: "Bathware" },
	];
	return (
		<section className={category.heading}>
			Shop By Category
		</section>

	)

}

export default Category