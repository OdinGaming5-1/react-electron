import React from "react";
import { StyledButton2 } from "./StyledComponents";

export default function Title({ title, navigate, shouldPop = true }) {
  return (
    <div className="navbar">
      {shouldPop && (
        <StyledButton2 onClick={() => navigate("/admin")} children="Geri" />
      )}
      <h2>{title}</h2>
      <StyledButton2 onClick={() => navigate("/")} children="Çıkış" />
    </div>
  );
}
