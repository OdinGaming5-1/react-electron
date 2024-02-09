import React from "react";

const LogOut = ({ navigate }) => {

  function handleClick() {
    navigate("/");
  }

  return <button className="logout" onClick={handleClick}>Log Out</button>;
};

export default LogOut;