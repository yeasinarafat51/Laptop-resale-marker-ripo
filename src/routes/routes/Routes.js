import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Addproduct from "../../pages/dashbord/addproduct/Addproduct";
import Addseller from "../../pages/dashbord/addseller/Addseller";
import Allseller from "../../pages/dashbord/Allseller/Allseller";
import Allusers from "../../pages/dashbord/allusers/Allusers";
import Dashboard from "../../pages/dashbord/dashbord/Dashboard";
import Myproduct from "../../pages/dashbord/myproduct/Myproduct";
import Booking from "../../pages/home/booking/Booking";
import Home from "../../pages/home/home/Home";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import AdminRoute from "../adminrout/AdminRoute";
import Adminseller from "../Adminseller";
import PrivateRoute from "../privetrout/PrivateRoute";
import baner3 from '../../assets/baner3.jpg'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/booking/:id',
                element: <Booking></Booking>,
                loader: ({params}) => fetch(`http://localhost:5000/seller/${params.id}`)
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element:<Myproduct></Myproduct>
            },
            {
                path: '/dashboard/allusers',
                element:<AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: '/dashboard/addseller',
                element:<Addseller></Addseller>
            },
            {
                path: '/dashboard/addproduct',
                element:<Addproduct></Addproduct>
            },
            {
                path: '/dashboard/allsellers',
                element:<AdminRoute><Allseller></Allseller></AdminRoute>
            },

        ]
    },
    {
        path:'*',
        element:<div><img className="w-3/5" src={baner3} alt=""/></div>
    }
])

export default router;