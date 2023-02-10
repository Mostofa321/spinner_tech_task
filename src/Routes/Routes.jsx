import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cart from "../Pages/Carts/Cart";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
            
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);


export default router;