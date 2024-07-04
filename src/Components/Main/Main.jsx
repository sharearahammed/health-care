import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className="">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;