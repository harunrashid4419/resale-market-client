import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from '../../Layout/Main/Main';
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Others/Blog";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        ]
    }
])
export default routes;