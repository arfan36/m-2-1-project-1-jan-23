import React from "react";
import ProductCard from "../component/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
	const {
		state: { cart, loading, error },
	} = useProducts();

	let content;
	if (loading) {
		content = <p>Loading</p>;
	}
	if (error) {
		content = <p>Something went wrong</p>;
	}
	if (!loading && !error && cart.length === 0) {
		content = <p>Nothing to show, product list is empty</p>;
	}
	if (!loading && !error && cart.length) {
		content = cart.map((product) => (
			<ProductCard
				key={product._id}
				product={product}
			/>
		));
	}

	return (
		<>
			<h2 className="text-center text-2xl mt-4">Cart: {cart.length}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
				{content}
			</div>
		</>
	);
};

export default Cart;
