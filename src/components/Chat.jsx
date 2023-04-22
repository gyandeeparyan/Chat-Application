import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const Chat = () => {
  const { data } = useContext(ChatContext);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/login");
  };

  const goBack = () => {
    navigate("/chats");
  };
  return (
    <div className='chat'>
      <div className='chatInfo'>
        
        <span>{data.user?.displayName}</span>
        <div className='chatIcons' style={{ cursor: "pointer" }}>
          <div onClick={goBack}>
            <ArrowCircleLeftIcon />
          </div>
          <div onClick={handleClose}>
            <CancelIcon />
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
