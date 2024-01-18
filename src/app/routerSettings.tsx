import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Homepage/Homepage";
import { Category } from "../pages/Category/Category";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: ':cat',
        element: <Category />
    }
])