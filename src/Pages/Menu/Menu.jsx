import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import { useMenu } from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle heading="TODAY'S OFFER" subHeading="---Don't miss---"></SectionTitle>
            <MenuCategory
                items={offered}

            ></MenuCategory>
            {/* desert */}
            <MenuCategory
                items={dessert}
                coverImg={desertImg}
                title="dessert"></MenuCategory>
            {/* pizza */}
            <MenuCategory
                items={pizza}
                coverImg={pizzaImg}
                title="pizza"></MenuCategory>
            {/* salad */}
            <MenuCategory
                items={salad}
                coverImg={saladImg}
                title="salad"></MenuCategory>
            {/* soup */}
            <MenuCategory
                items={soup}
                coverImg={soupImg}
                title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;