import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Signin from "../../Pages/Signin/Signin";


export const router = createBrowserRouter([{
    path:'/',
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'./signin/:id',
            element:<Signin/>
        },
        {
            path:'./register/:id',
            element:<Register/>
        },
    ]
}])