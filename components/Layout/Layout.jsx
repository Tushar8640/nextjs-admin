import React from "react";
import Navbar from "../shared/Nav";
import SideBar from "../shared/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10 mt-28">{children}</div>
      </div>
    </>
  );
};

export default Layout;
