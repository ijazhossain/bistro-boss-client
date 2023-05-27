
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../hooks/useMenu";
import MenuCategory from "../Menu/MenuCategory";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU"></SectionTitle>
            <MenuCategory items={popularMenu}></MenuCategory>
        </section>
    );
};

export default PopularMenu;