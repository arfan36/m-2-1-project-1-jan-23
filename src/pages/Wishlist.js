import React from "react";
import ProductCard from "../component/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Wishlist = () => {
	const {
		state: { wishlist, loading, error },
	} = useProducts();

	let content;
	if (loading) {
		content = <p>Loading...</p>;
	}
	if (error) {
		content = <p>Something went wrong</p>;
	}
	if (!loading && !error && wishlist.length === 0) {
		content = <p>Nothing to show, product list is empty</p>;
	}
	if (!loading && !error && wishlist.length) {
		content = wishlist.map((product) => (
			<ProductCard
				key={product._id}
				product={product}
			/>
		));
	}
	return (
		<>
			<h2 className="text-center text-2xl mt-4">Wishlist: {wishlist.length}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
				{content}
			</div>
		</>
	);
};

export default Wishlist;
