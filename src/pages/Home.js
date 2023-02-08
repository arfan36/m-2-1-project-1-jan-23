import React from "react";
import ProductCard from "../component/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
	const {
		state: { products },
	} = useProducts();

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 justify-items-center ">
			{products.map((product) => (
				<ProductCard
					key={product._id}
					product={product}
				></ProductCard>
			))}
		</div>
	);
};

export default Home;
