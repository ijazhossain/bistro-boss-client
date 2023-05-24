import Banner from "../Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu";
import Slider from "../Slider";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;