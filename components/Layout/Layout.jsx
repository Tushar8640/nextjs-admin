import React from "react";
import Navbar from "../shared/Nav";
import SideBar from "../shared/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
     
      <div className="grid grid-cols-12">
            <div className="col-span-4">
                <SideBar/>
            </div>
            <div className="col-span-8">
                {children}
            </div>

      </div>
     
    </>
  );
};

export default Layout;