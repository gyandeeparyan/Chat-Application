import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const handleLogout = () => {
    () => signOut(auth);
    navigate("/login");
  };
  return (
    <div className='navbar'>
      <span className='logo'>Telegram</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt='' />
        &nbsp; &nbsp;&nbsp;&nbsp;
        <span>{currentUser.displayName}</span>
      </div>
      <div className='btn'>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
