import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/HomePage/Home/Navbar/Navbar";
import Footer from "../../Pages/HomePage/Home/Fotter/Footer";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;