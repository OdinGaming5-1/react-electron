import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return <button onClick={handleClick}>Log Out</button>;
};

export default LogOut;