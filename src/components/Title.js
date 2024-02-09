import React from "react";
import LogOut from "./LogOut";

export default function Title({ title, navigate }) {
  return (
    <div className="navbar">
      <h2>{title}</h2>
      <LogOut navigate={navigate} />
    </div>
  );
}
