import Banner from "../Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu";
import Slider from "../Slider";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;