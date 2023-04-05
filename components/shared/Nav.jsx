import React, { useEffect, useRef, useState } from "react";
// import {FaSearch} from "react-icons/fa";
import { FaBars, FaSearch } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
// import {BsViewList} from "react-icons/bs";
// import {FiGrid} from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = ({ setToggle, toggle }) => {
  const cart = useSelector((state) => state.cart);
  // console.log(newNotification);
  // closing dropdown on clicking outside
  const ref = useRef();
  const btnRef = useRef();

  //search functionality with debounce
  const [search, setSearch] = useState("");

  const theme = "dark";
  return (
    <div className=" bg-gray-50 fixed w-full shadow z-10">
      <header>
        <div className=" flex py-2">
          <div className="ml-auto flex">
            {/* navbar icons  */}
            <div className="flex items-center text-primary dropdown relative mr-3">
              <button
                className="mr-3 p-3  bg-white rounded-full"
                title="Refresh"
              >
                {" "}
                <MdRefresh className="w-8 h-8 text-black" />
              </button>

              <button
                className="mr-3 p-3  bg-white rounded-full"
                title="Dark Mode"
              
              >
                <MdOutlineDarkMode className="w-8 h-8  text-black" />
              </button>

              <button
                className="mr-3 p-3  bg-white rounded-full"
                title="Refresh"
              >
                {" "}
                <BsFillBellFill className="w-8 h-8  text-black" />
              </button>
              <button
                className="mr-3 p-3  bg-white rounded-full"
                title="Settings"
                id="dropdownMenuButton1"
                aria-expanded="false"
                ref={ref}
              >
                <IoSettingsOutline className="w-8 h-8  text-black" />
              </button>

              <button
                className="mr-3 p-3  bg-white rounded-full relative"
                title="Settings"
                id="dropdownMenuButton1"
                aria-expanded="false"
                ref={ref}
              >
                {" "}
                {cart.length > 0 && (
                  <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {cart?.length}
                  </span>
                )}
                <MdOutlineShoppingCart className="w-8 h-8  text-black" />
              </button>

              <div className="relative flex-shrink-0">
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt=""
                  className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
