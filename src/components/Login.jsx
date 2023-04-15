import React, { useState } from "react";
import user_photo from "../assets/pokeball.svg";
import "../StyleSheets/Login.css";
import { useDispatch } from "react-redux";
import { changeUsername } from "../features/login/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [validation, setValidation] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /[^a-zA-Z0-9]/g;
    const symbols = regex.test(username);
    console.log(username)
    console.log(symbols)
    if (symbols) {
      dispatch(changeUsername(username));
      localStorage.setItem("username", username.toString());
      navigate("/pokemon");
    }
    else{
      setValidation(false)
    }
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
      <p>{validation}</p>
      <button>LOGIN</button>
    </form>
  );
};
