import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUser, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    // console.log('is admin ex', isAdmin);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80  text-base-content bg-[#D1A054]">

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    ADMIN HOME </NavLink></li>
                                <li><NavLink to="/dashboard/addItem">
                                    <FaUtensils></FaUtensils>
                                    ADD ITEMS</NavLink></li>
                                <li><NavLink to="/dashboard/manageItem">
                                    <FaWallet></FaWallet>
                                    MANAGE ITEMS</NavLink></li>
                                <li><NavLink to="/dashboard/myCart">
                                    <FaBook></FaBook>

                                    MANGE BOOKINGS
                                </NavLink>

                                </li>
                                <li><NavLink to="/dashboard/allUsers">
                                    <FaUser></FaUser>

                                    ALL USERS
                                </NavLink>

                                </li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home </NavLink></li>
                                <li><NavLink to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/history">
                                    <FaWallet></FaWallet>
                                    Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/myCart">
                                    <FaShoppingCart></FaShoppingCart>

                                    Cart
                                    <span className="badge badge-secondary">+{cart.length}</span></NavLink>

                                </li>
                            </>
                    }

                    <li className="divider"></li>
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink to="/menu">

                        Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order now</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;