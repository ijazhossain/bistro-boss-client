import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    return (
        <div className="w-full">
            <div className="flex items-center justify-evenly w-full mb-12">
                <h3 className="text-3xl">Total Order:{cart.length} </h3>
                <h3 className="text-3xl">Total Price: ${totalPrice}</h3>
                <button className="btn btn-warning btn-xs">pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th className="text-end">Price</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <th className="text-end">
                                    <button className="btn btn-ghost btn-lg bg-[#B91C1C] text-white"><FaTrash className=""></FaTrash></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;