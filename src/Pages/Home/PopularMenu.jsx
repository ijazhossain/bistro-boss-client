import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular")
                console.log(popularItems);
                setMenu(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    menu.map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;