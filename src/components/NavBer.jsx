import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const NavBer = () => {
  return (
    <div className="navbar px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to='/' >
              <a>Home</a>
            </NavLink >
            <NavLink to='/statistics' >
              <a>Statistics</a>
            </NavLink >
            <NavLink to='/dashboard'>
              <a>Dashboard</a>
            </NavLink >
            
            <NavLink to='/review' >
              <a>Review</a>
            </NavLink >
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">Gadget</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 gap-10">
            <NavLink to='/' >
              <a>Home</a>
            </NavLink >
            <NavLink to='/statistics' >
              <a>Statistics</a>
            </NavLink >
            <NavLink to='/dashboard'>
              <a>Dashboard</a>
            </NavLink >
            
            <NavLink to='/review' >
              <a>Review</a>
            </NavLink >
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn rounded-full"><TiShoppingCart/></a>
        <a className="btn rounded-full"><CiHeart/></a>
      </div>
    </div>
  );
};

export default NavBer;
