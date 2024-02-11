import React, { useState } from "react";
import { LoginUser } from "../rolesTableHandler";
import NUserForm from "../components/NUserForm";
import { StyledButton } from "../components/StyledComponents";
const { ipcRenderer } = window.require('electron');

export default function NLoginPage({ navigate }) {
  const [message, setMessage] = useState("");
  function getPageByRole(role) {
    switch (role) {
      case "admin":
        return "/admin";
      case "atolye":
        return "/atolye";
      default:
        break;
    }
  }
  async function loadDatas({ name, password }) {
    try {
      const data = await LoginUser({ name: name, password: password });
      const page = getPageByRole(data[0].role);
      navigate(page);
    } catch (error) {
      setMessage("Hata: Giriş Bilgilerini Kontrol Ediniz!");
    }
  }
  return (
    <div className="columnDiv mt-20">
      <h2>Boise Atölye</h2>
      <NUserForm
        onSubmit={loadDatas}
        buttonTitle={"Giriş Yap"}
        onInputChange={(value) => setMessage(value)}
      />
      <p className="columnDiv">{message}</p>
      <StyledButton onClick={() => ipcRenderer.send('quit', {})} children="Uygulamayı Kapat" />
    </div>
  );
}
