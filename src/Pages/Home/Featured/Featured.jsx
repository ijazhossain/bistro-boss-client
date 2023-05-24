import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'
import './Feature.css'
const Featured = () => {
    return (
        <div className="feature-section pt-6 my-12 bg-fixed ">
            <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---"></SectionTitle>
            <div className="md:flex items-center justify-center py-20 px-36 gap-8 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featureImg} alt="feature img" />
                </div>
                <div className="text-white space-y-5">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;