import React from "react";
import { FindRole } from "../rolesTableHandler";
import { useNavigate } from "react-router-dom";
import NUserForm from "../components/NUserForm";

export default function NLoginPage() {
  const navigate = useNavigate();

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

  async function loadDatas({name, password}) {

    const data = await FindRole({ name: name, password: password });
    console.log(data[0].role);

    const page = getPageByRole(data[0].role);
    navigate(page);
  }
  return (
    <div>
      <h2>NLogin</h2>
      <NUserForm
        onSubmit={loadDatas} 
        buttonTitle={"Login"} />
    </div>
  );
}
