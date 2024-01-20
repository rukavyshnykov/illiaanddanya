import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Homepage/Homepage";
import { Category } from "../pages/Category/Category";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/:cat',
        element: <Category />
    }
])