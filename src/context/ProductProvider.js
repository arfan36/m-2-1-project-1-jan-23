import React, { createContext, useContext, useEffect, useState } from "react";

const PRODUCTS_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/products`)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	const value = {
		data,
	};

	return (
		<PRODUCTS_CONTEXT.Provider value={value}>
			{children}
		</PRODUCTS_CONTEXT.Provider>
	);
};

export const useProducts = () => {
	const context = useContext(PRODUCTS_CONTEXT);
	return context;
};

export default ProductProvider;
