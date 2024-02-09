import React from "react";

const LogOut = ({ navigate }) => {

  function handleClick() {
    navigate("/");
  }

  return <button onClick={handleClick}>Log Out</button>;
};

export default LogOut;