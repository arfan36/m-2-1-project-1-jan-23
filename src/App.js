import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";


function App() {


	return (
		<div>
			<ProductProvider>
				<RouterProvider router={routes} />
			</ProductProvider>
		</div>
	);
}

export default App;
