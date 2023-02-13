import React from "react";
import { useDispatch } from "react-redux";
import { BiListPlus } from "react-icons/bi";
import { ADD_TO_CART } from "../redux/actionTypes/actionTypes";
import { addToCart } from "../redux/actionCreators/productActions";

const ProductCard = ({
	product,
	product: { image, keyFeature, model, rating },
}) => {
	const dispatch = useDispatch();

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
					<div className="flex gap-2">
						<button
							onClick={() => dispatch(addToCart(product))}
							className="btn btn-primary btn-sm w-5/6"
						>
							Buy Now
						</button>
						<button
							title="Add to wishlist"
							className="btn btn-primary btn-sm rounded-full w-1/6"
						>
							<BiListPlus className="text-2xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
