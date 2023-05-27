import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className="my-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {
                    items.map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn border-0 border-b-4">Order Now</button></Link>

        </div>
    );
};

export default MenuCategory;