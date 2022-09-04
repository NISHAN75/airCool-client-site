import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";

const Dashboard = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashBoard-sideBar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-5xl text-primary justify-center font-bold text-center mt-5">
          Welcome Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashBoard-sideBar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-70 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="text-black font-bold hover:bg-secondary  hover:text-white mr-3 p-2">
            <Link to="/dashborad" className="font-bold">Profile</Link>
          </li>
          {!admin && (
            <li className=" text-black  hover:bg-secondary  hover:text-white mr-3 p-2">
              <Link to="/dashborad/myOrders" className="font-bold">My Orders</Link>
            </li>
          )}
          {!admin && (
            <li className=" text-black font-bold hover:bg-secondary  hover:text-white mr-3 p-2">
              <Link to="/dashborad/review" className="font-bold">Add A Reviews</Link>
            </li>
          )}

          {admin && (
            <li className=" text-black font-bold hover:bg-secondary  hover:text-white mr-3 p-2">
              <Link to="/dashborad/allOrder" className="font-bold">Manage All Order</Link>
            </li>
          )}
          {admin && (
            <li className=" text-black font-bold hover:bg-secondary  hover:text-white mr-3 p-2">
              <Link to="/dashborad/users" className="font-bold">All User</Link>
            </li>
          )}
          {admin && (
            <li className=" text-black font-bold hover:bg-secondary  hover:text-white mr-3 p-2">
              <Link to="/dashborad/addProduct" className="font-bold">Add a Product</Link>
            </li>
          )}
          {admin && (
            <li className=" text-black font-bold hover:bg-secondary  hover:text-white mr-3 p-2">
              <Link to="/dashborad/allProducts" className="font-bold">Manage Products</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;