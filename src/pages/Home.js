import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";

const Home = () => {
	const [products, set_products] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => set_products(data));
	}, []);

	const state = useSelector((state) => state);
	console.log("state :>> ", state);

	return (
		<>
			<h1 className="text-center text-2xl mt-4">
				This is home: {products.length}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 justify-items-center ">
				{products.map((product) => (
					<ProductCard
						key={product._id}
						product={product}
					></ProductCard>
				))}
			</div>
		</>
	);
};

export default Home;
