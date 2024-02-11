import React, { useState } from "react";
import {
  StyledButton,
  CenteredContainer300,
  StyledInput,
  StyledTextArea,
} from "../components/StyledComponents";
import Title from "../components/Title";
import { Insert } from "../mainTableHandler";

export default function NewEntryPage({ navigate }) {
  const [saveMessage, setSaveMessage] = useState("");
  const [state, setState] = useState({
    status_id: 1,
    name: "",
    detail: "",
  });

  const setField = ({ name, e }) => {
    setSaveMessage("");
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const save = () => {
    try {
      Insert(state);
      setSaveMessage('Kayıt Eklendi');
    } catch (error) {
      setSaveMessage(`Hata: ${error}`);
    } finally {
      setState({ status_id: 1, name: "", detail: "" });
    }
  };

  return (
    <div className="columnDiv">
      <Title navigate={navigate} title={"Mağaza Sayfası"} />
      <CenteredContainer300 onSubmit={() => {}}>
        <StyledInput
          type="text"
          placeholder="Müşteri adını giriniz"
          value={state?.name}
          onChange={(e) => setField({ name: "name", e: e })}
        />
        <StyledTextArea
        style={{minHeight: '300px'}}
          placeholder="Yapılacak işin açıklamasını giriniz"
          value={state?.detail}
          onChange={(e) => setField({ name: "detail", e: e })}
        />
        <StyledButton onClick={save}>Ekle</StyledButton>
      </CenteredContainer300>
        {saveMessage && <p className="columnDiv">{saveMessage}</p>}
    </div>
  );
}
