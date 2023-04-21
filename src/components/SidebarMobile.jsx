import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ChatsMobile from "./ChatsMobile";
const SidebarMobile = () => {
  return (
    <>
      <div className='sidebar'>
        <Navbar />
        <Search />
        <ChatsMobile/>
      </div>
    </>
  );
};

export default SidebarMobile;
