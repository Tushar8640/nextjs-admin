import React, { useEffect, useRef, useState } from "react";
// import {FaSearch} from "react-icons/fa";
import { FaBars, FaSearch } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
// import {BsViewList} from "react-icons/bs";
// import {FiGrid} from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { MdDisabledByDefault } from "react-icons/md";

const Navbar = ({ setToggle, toggle }) => {
  // console.log(newNotification);
  // closing dropdown on clicking outside
  const ref = useRef();
  const btnRef = useRef();

  //search functionality with debounce
  const [search, setSearch] = useState("");

  const theme = "dark";
  return (
    <div className=" bg-gray-50">
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
                onClick={() => themeModeChange("dark")}
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
