import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OurWork from "../Our work/OurWork";
import Services from "../Services/Services";
import Sponsors from "../Sponsors/Sponsors";


const Home = () => {
   
    return (
        <div>
            <Helmet>
                <title>SolutionMania | Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <OurWork></OurWork>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;