const MenuItem = ({ menuItem }) => {
    // console.log(menuItem);
    // eslint-disable-next-line no-unused-vars
    const { _id, price, name, image, recipe } = menuItem;
    return (
        <div className="flex gap-4">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[120px] " src={image} alt="menu pic" />
            <div>
                <h2>{name}--------------</h2>
                <p>{recipe}</p>
            </div><p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;