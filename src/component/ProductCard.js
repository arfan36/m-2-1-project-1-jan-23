import React from "react";
import { MdOutlinePlaylistAdd, MdRemoveShoppingCart } from "react-icons/md";
import { useProducts } from "../context/ProductProvider";
import { actionTypes } from "../state/ProductState/actionTypes";

const ProductCard = ({
	product,
	product: { _id, image, keyFeature, model, price, rating, spec, status },
}) => {
	const { state, dispatch } = useProducts();

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
						<>
							{state?.cart?.filter((product) => product._id === _id).length ? (
								<button
									className="btn btn-sm btn-primary w-4/5 rounded-full"
									disabled
								>
									Item Added to Cart
								</button>
							) : (
								<button
									className="btn btn-sm btn-primary w-4/5 rounded-full"
									onClick={() =>
										dispatch({
											type: actionTypes.ADD_TO_CART,
											payload: product,
										})
									}
								>
									Add to Cart
								</button>
							)}
						</>
						<>
							{state?.cart?.filter((product) => product._id === _id).length ? (
								<button
									className="btn btn-sm btn-primary text-2xl w-1/5 rounded-full"
									title="Remove from cart"
									onClick={() => {
										dispatch({
											type: actionTypes.REMOVE_FROM_CART,
											removeItem: product,
										});
									}}
								>
									<MdRemoveShoppingCart />
								</button>
							) : (
								<button
									className="btn btn-sm btn-primary text-2xl w-1/5 rounded-full"
									title="Add to wishlist"
								>
									<MdOutlinePlaylistAdd />
								</button>
							)}
						</>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
