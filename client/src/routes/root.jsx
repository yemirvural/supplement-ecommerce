import { createBrowserRouter } from "react-router-dom";
import '../app/App.css'
import Home from '../pages/Home'
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import CheckOut from "../pages/CheckOut";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/product",
        element: <Product />,
    },
    {
        path: "/:productName",
        element: <Product />,
    },
    {
        path: "/checkout",
        element: <CheckOut />,
    },
]);

