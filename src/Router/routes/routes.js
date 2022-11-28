import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from '../../Layout/Main/Main';
import AddProduct from "../../Pages/Dashboard/AddProducts/AddProduct";
import AllBayer from "../../Pages/Dashboard/AllBayer/AllBayer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import Orders from "../../Pages/Dashboard/Dashboard/Orders/Orders";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import ReportedItems from "../../Pages/Dashboard/Dashboard/ReportedItems/ReportedItems";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ProductsAdd from "../../Pages/Dashboard/ProductsAdd/ProductsAdd";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import Blog from "../../Pages/Others/Blog";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import BayerRoutes from "../BayerRoutes/BayerRoutes";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

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
                path: 'dashboard',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'seller',
                element: <AdminRoutes><AllSeller></AllSeller></AdminRoutes>
            },
            {
                path: 'order',
                element: <BayerRoutes><Orders></Orders></BayerRoutes>
            },
            {
                path: 'myProduct',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path: 'bayer',
                element: <AdminRoutes><AllBayer></AllBayer></AdminRoutes>
            },
            {
                path: 'report',
                element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
            },
            {
                path: 'productadd',
                element: <SellerRoutes><ProductsAdd></ProductsAdd></SellerRoutes>
            }
        ]
    }
])
export default routes;