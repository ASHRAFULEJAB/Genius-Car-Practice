import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Home/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/sign-up',
                element:<SignUp></SignUp>
            }
            
        ]
    }
])