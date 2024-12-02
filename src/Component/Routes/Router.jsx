import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/HomePage/Home/Home";
import Media from "../../Pages/MediaPage/Media";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children :[
            {
                path :'/',
                element :<Home/>
            },
            {
                path:'/media',
                element:<Media/>
            }
        ]
    },
]);