import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Homepage/Homepage";
import { Category } from "../pages/Category/Category";
import { Layout } from "../pages/Layout/Layout";

export const router = createBrowserRouter([
    {
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/:cat',
            element: <Category />
        }
    ]
    }
])