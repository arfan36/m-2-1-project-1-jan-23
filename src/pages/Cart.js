import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<>
			<h2 className="text-center text-2xl mt-4">Cart: {cart.length}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
				{cart.map((product) => (
					<ProductCard
						key={product._id}
						product={product}
					></ProductCard>
				))}
			</div>
		</>
	);
};

export default Cart;
