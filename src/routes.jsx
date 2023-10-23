import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Errorpage from "./components/Errorpage/Errorpage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ServiceDetails from "./components/Services/ServiceDetails";
import AboutUs from "./components/AboutUs/AboutUs";
import Consult from "./components/Consult/Consult";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path: '/aboutus',
              element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
              path: '/consult',
              element: <PrivateRoute><Consult></Consult></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/ServiceDetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            }
            
        ]
    },
])

export default routes