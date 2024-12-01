import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import FirstSection from "./FirstSection/FirstSection";
import Footer from "./Fotter/Footer";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    return (
        <>
        
        <Navbar/>
        <Banner/>
        {/* <Features/> */}
        <FirstSection/>
        <Footer/>
        
        </>
    );
};

export default Home;