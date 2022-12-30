import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/About/About";
import Details from "../../pages/Home/AllPost/Details";
import Home from "../../pages/Home/Home/Home";
import Main from "../../pages/Layout/Main/Main";
import Login from "../../pages/Login/Login";
import Media from "../../pages/Media/Media";
import Message from "../../pages/Message/Message";
import Error from "../../pages/Share/Error/Error";
import SignUp from "../../pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/message',
            element: <Message />
        },
        {
            path: '/media',
            element: <Media />
        },
        {
            path: '/details/:id',
            element: <Details />,
            loader: async ({params}) => fetch(`${process.env.REACT_APP_API_KEY}/details/${params.id}`)
        }
    ]
}]);
export default router;