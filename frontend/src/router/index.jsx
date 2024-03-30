import { createBrowserRouter } from "react-router-dom";

//pages
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const router =  createBrowserRouter([
    {
        path:'login',
        element:<Login/>,
    },
    {
        path:'register',
        element:<Register/>,
    },
    {
        path:'/',
        element:<h1>Coming soon..</h1>,
    },
])

export default router;