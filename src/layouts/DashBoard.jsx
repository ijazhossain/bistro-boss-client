import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">

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
                        Cart</NavLink></li>

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