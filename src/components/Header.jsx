import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/pokemon-23.svg";
import { TbPokeball } from "react-icons/tb";
import "../StyleSheets/Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/')
  }
  
  if (username === "") {
    return (
      <div className="header">
        <img src={logo} alt="" width="120px" />
      </div>
    );
  }
  return (
    <div className="header">
      <img src={logo} alt="" width="120px" onClick={handleOnClick} />
      <span className="username">
        <TbPokeball width="50px" />
        <p>{username}</p>
      </span>
    </div>
  );
};
