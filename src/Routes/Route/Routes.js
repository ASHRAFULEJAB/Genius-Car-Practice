import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Home/Login/Login";
import Orders from "../../pages/Orders/Orders";
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
            },
            {
                path: "/checkout/:id",
                element: <CheckOut></CheckOut>,
              loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }, {
                path: "/orders",
                element:<Orders></Orders>
            }
            
        ]
    }
])