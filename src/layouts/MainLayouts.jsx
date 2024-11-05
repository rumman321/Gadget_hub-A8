import { Outlet } from "react-router-dom";

import BannerTitle from "../components/BannerTitle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBer from "../components/NavBer";


const MainLayouts = () => {
    return (
        <div>
           <div className="bg-blue-900 text-white rounded-xl mt-8 mx-8 ">
           <NavBer></NavBer>
           <BannerTitle></BannerTitle>
           </div>
           
           <Outlet></Outlet>
           <div>
           <Header
            title={"Gadget Heaven"}
            subtitle={"Leading the way in cutting-edge technology and innovation."}
           ></Header>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayouts;