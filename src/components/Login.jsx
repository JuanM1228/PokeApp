import React, { useState } from "react";
import user_photo from "../assets/pokeball.svg";
import "../StyleSheets/Login.css";
import { useDispatch } from "react-redux";
import { changeUsername } from "../features/login/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeUsername(username));
    navigate("/pokemon");
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <img src={user_photo} alt="" width="50%" />
      <h2>WELCOME</h2>
      <input
        type="text"
        placeholder="Please enter your name"
        required
        onChange={handleChange}
      />
      <button>LOGIN</button>
    </form>
  );
};
