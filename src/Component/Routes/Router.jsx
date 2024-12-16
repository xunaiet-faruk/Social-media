import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/HomePage/Home/Home";
import Media from "../../Pages/MediaPage/Media";
import Mediadetails from "../../Pages/MediaPage/Mediadetails";

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
            },
            {
                path:'/mediaDetails/:id',
                element:<Mediadetails/>
            },
        ]
    },
]);