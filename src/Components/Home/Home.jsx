import Care from "../Care/Care";
import Faq from "../Faq/Faq";
import Offer from "../Offer/Offer";
import Service from "../Service/Service";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import './Style.css'

const Home = () => {
    // max-w-6xl mx-auto
    return (
        <div className="bg-gradient-to-t from-blue-50 from-10%% via-white via-80% to-blue-50 to-90%">
            <div className="bg-multiple-images w-full lg:h-[600px]">
            <Navbar />
            <Banner />
            </div>
            <div className="max-w-6xl mx-auto">
            <Care />
            <WhoWeAre />
            <Service />
            <Testimonial />
            <Faq />
            </div>
            <div className="bg-multiple-images w-full lg:h-[600px] ">
            <Offer />
            </div>
        </div>
    );
};

export default Home;