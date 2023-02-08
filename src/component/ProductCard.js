import React from "react";

const ProductCard = ({
	product: { image, keyFeature, model, price, rating, spec, status },
}) => {
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
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
