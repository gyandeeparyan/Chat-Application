import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const ChatMobile = () => {
  const { data } = useContext(ChatContext);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/login");
  };

  return (
    <>
       <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons' style={{ cursor: "pointer" }}>
          <div onClick={handleClose}>
            <CancelIcon />
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
    </>
  );
};

export default ChatMobile;
