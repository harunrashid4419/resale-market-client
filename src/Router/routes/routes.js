import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from '../../Layout/Main/Main';
import AddProduct from "../../Pages/Dashboard/AddProducts/AddProduct";
import AllBayer from "../../Pages/Dashboard/AllBayer/AllBayer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import Blog from "../../Pages/Others/Blog";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products/:category_id',
                element: <PrivateRouter><Products></Products></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.category_id}`)
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/myOrder',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allBayer',
                element: <AllBayer></AllBayer>
            }
        ]
    }
])
export default routes;