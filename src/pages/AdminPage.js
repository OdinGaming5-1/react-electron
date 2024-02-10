import React from "react";
import { StyledButton } from "../components/StyledComponents";
import Title from "../components/Title";

const AdminPage = ({ navigate }) => {
  return (
    <div className="columnDiv mt-20">
      <Title navigate={navigate} title={"Mağaza Sayfası"}/>
      <StyledButton onClick={()=>{navigate("/new")}}>Yeni Kayıt</StyledButton>
      <br />
      <StyledButton onClick={()=>{navigate("/list")}}>Kayıtları Listele</StyledButton>
      <br />
      <StyledButton onClick={()=>{navigate("/listold")}}>Geçmiş Kayıtlar</StyledButton>
    </div>
  );
};

export default AdminPage;
