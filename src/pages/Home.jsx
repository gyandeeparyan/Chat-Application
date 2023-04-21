import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Chats from "../components/Chats";
import ChatsMobile from "../components/ChatsMobile";
import SidebarMobile from "../components/SidebarMobile";
const Home = () => {
  const deviceWidth = screen.width;
  const portrait = window.matchMedia("(orientation: portrait)").matches;
  const res = deviceWidth <= 480 && portrait;
  return (
    <>
      {res ? (
        <div className='home'>
          <div className='container'>
           <SidebarMobile/>
          </div>
        </div>
      ) : (
        <div className='home'>
          <div className='container'>
            <Sidebar />
            <Chat />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
