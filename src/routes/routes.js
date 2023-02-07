import Main from "../Layout/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: 'about',
				element: <About></About>
			},
			{
				path: 'top-rated',
				element: <TopRated></TopRated>
			},
			{
				path: 'cart',
				element: <Cart></Cart>
			},
		],
	},
]);

export default routes;
