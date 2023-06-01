import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/LogIn/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret";
import DashBoard from "../layouts/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/MyCart/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";

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
                path: '/menu',
                element: <Menu></Menu>
            }, {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>,
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>,
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>,
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
            }
        ]
    }
])