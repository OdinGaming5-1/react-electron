import React from "react";
import { StyledButton } from "../components/StyledComponents";
import Title from "../components/Title";
import { ExportCSV } from "../mainTableHandler";

const AdminPage = ({ navigate }) => {
  return (
    <div className="columnDiv mt-20">
      <Title navigate={navigate} title={"Mağaza Sayfası"} shouldPop={false}/>
      <StyledButton onClick={()=>{navigate("/new")}}>Yeni Kayıt</StyledButton>
      <br />
      <StyledButton onClick={()=>{navigate("/list")}}>Kayıtları Listele</StyledButton>
      <br />
      <StyledButton onClick={()=>{navigate("/listold")}}>Geçmiş Kayıtlar</StyledButton>
      <br />
      <StyledButton onClick={()=>{ExportCSV()}}>Excel'e Aktar</StyledButton>
      <br />
      <StyledButton onClick={()=>{navigate("/wipeout")}}>Tüm Verileri Sil</StyledButton>
    </div>
  );
};

export default AdminPage;
