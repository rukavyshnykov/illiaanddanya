import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    }
])