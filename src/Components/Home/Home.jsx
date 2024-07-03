import Offer from "../Offer/Offer";
import Service from "../Service/Service";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const Home = () => {
    return (
        <div>
            <Banner />
            <WhoWeAre />
            <Service />
            <Testimonial />
            <Offer />
        </div>
    );
};

export default Home;