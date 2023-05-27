import { Helmet } from "react-helmet-async";
import Banner from "../Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu";
import Slider from "../Slider";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | HOME</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;