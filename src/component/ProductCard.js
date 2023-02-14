import React from "react";
import { useDispatch } from "react-redux";
import { BiListPlus } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

import {
	addToCart,
	removeFromCart,
} from "../redux/actionCreators/productActions";
import { useLocation } from "react-router-dom";

const ProductCard = ({
	product,
	product: { image, keyFeature, model, rating },
}) => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	return (
		<div className="m-4">
			<div className="card w-96 bg-base-100 shadow-xl h-full">
				<figure>
					<img
						src={image}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{model}</h2>
					<h3 className="text-center font-semibold text-md mb-3">
						Rating: {rating}
					</h3>
					{keyFeature.map((feature, i) => (
						<p key={i}>
							<b># </b>
							{feature}
						</p>
					))}
					<div className="flex gap-4">
						<div className="flex gap-2 w-5/6">
							{pathname.includes("cart") && (
								<button
									onClick={() => dispatch(removeFromCart(product))}
									className="btn btn-error hover:bg-red-600 text-white btn-sm rounded-full w-1/2 gap-2"
								>
									<span>Remove</span>
									<RiDeleteBin2Line className="text-2xl" />
								</button>
							)}
							{!pathname.includes("cart") && (
								<button
									onClick={() => dispatch(addToCart(product))}
									className="btn btn-primary btn-sm rounded-full w-1/2"
								>
									Add to cart
								</button>
							)}
						</div>
						{!pathname.includes("cart") && (
							<button
								title="Add to wishlist"
								className="btn btn-primary btn-sm rounded-full w-1/6"
							>
								<BiListPlus className="text-2xl" />
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
