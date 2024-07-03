import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Report from "../../Components/Report/Report";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";

const Home = () => {
    return (
        <div className="container mx-auto inter">
            <Navbar></Navbar>
            <Banner></Banner>
            <Report></Report>
            <WhoWeAre></WhoWeAre>
        </div>
    );
};

export default Home;