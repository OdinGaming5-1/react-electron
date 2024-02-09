import React, { useState } from "react";
import {
  StyledButton,
  CenteredContainer300,
  StyledInput,
  StyledTextArea,
} from "../components/StyledComponents";
import StatusEnum from "../StatusEnum";
import Title from "../components/Title";
import { Insert } from "../mainTableHandler";

export default function NewEntryPage({ navigate }) {
  const [state, setState] = useState({
    status: StatusEnum.New,
    name: "",
    detail: "",
  });

  const setField = ({ name, e }) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const popBack = () => {
    navigate("/admin");
  };

  const save = () => {
    try {
      Insert(state);
      alert("Kayıt Eklendi");
    } catch (error) {
      alert("Hata", error);
    } finally {
      setState({ status: StatusEnum.New, name: "", detail: "" });
    }
  };

  return (
    <div className="columnDiv mt-20">
      <Title navigate={navigate} title={"Mağaza Sayfası"} />
      <CenteredContainer300 onSubmit={() => {}}>
        <StyledInput
          type="text"
          placeholder="Müşteri adını giriniz"
          value={state?.name}
          onChange={(e) => setField({ name: "name", e: e })}
        />
        <StyledTextArea
          placeholder="Yapılacak işin açıklamasını giriniz"
          value={state?.detail}
          onChange={(e) => setField({ name: "detail", e: e })}
        />
        <StyledButton onClick={save}>Ekle</StyledButton>
      <br />
      <StyledButton onClick={popBack}>İptal</StyledButton>
      </CenteredContainer300>
    </div>
  );
}
