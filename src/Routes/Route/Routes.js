import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layouts/Main'
import CheckOut from '../../pages/CheckOut/CheckOut'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Home/Login/Login'
import Orders from '../../pages/Orders/Orders'
import PrivateRoute from '../../pages/PrivateRoute/PrivateRoute'
import SignUp from '../../pages/SignUp/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>,
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://genius-car-server-one-gamma.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/orders',
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {},
    ],
  },
])
