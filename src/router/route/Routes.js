import { createBrowserRouter } from "react-router-dom";
import AddService from "../../component/pages/AddServices/AddService";
import Blog from "../../component/pages/Blog/Blog";
import Home from "../../component/pages/Home/Home";
import Login from "../../component/pages/Login/Login";
import Register from "../../component/pages/Login/Register";
import AddPost from "../../component/pages/post/AddPost";
import MyReview from "../../component/pages/Review/MyReview";
import ServiceDetails from "../../component/pages/ServiceDetails/ServiceDetails";
import Services from "../../component/pages/Services/Services";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)

                },
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addReview/:id',
                element: <PrivateRoute><AddPost></AddPost></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }

        ]
    }
])

export default router;