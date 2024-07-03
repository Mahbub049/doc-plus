import AppointmentBanner from "../../Components/AppointmentBanner/AppointmentBanner";
import Banner from "../../Components/Banner/Banner";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Report from "../../Components/Report/Report";
import Service from "../../Components/Service/Service";
import Testimonial from "../../Components/Testimonial/Testimonial";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto inter">
            <Navbar></Navbar>
            <Banner></Banner>
            <Report></Report>
            <WhoWeAre></WhoWeAre>
            <Service></Service>
            <Testimonial></Testimonial>
            <FAQ></FAQ>
            <AppointmentBanner></AppointmentBanner>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;