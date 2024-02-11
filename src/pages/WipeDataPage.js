import React, { useState } from "react";
import {
  StyledButton,
  CenteredContainer300,
  StyledInput,
} from "../components/StyledComponents";
import Title from "../components/Title";
import { DeleteAllDone } from "../mainTableHandler";

export default function WipeDataPage({ navigate }) {
  const [message, setMessage] = useState("");
  const [acknowledge, setAcknowledge] = useState("");

  const popBack = () => {
    navigate("/admin");
  };

  const handleDelete = () => {
    try {
      if (acknowledge !== "ONAYLIYORUM") throw new Error();
      DeleteAllDone();
      alert("Silme işlemi tamamlandı");
      popBack();
    } catch (error) {
      setMessage("Hata: Silme işlemi gerçekleştirilemedi");
    }
  };

  return (
    <div className="columnDiv mt-20">
      <Title navigate={navigate} title={"Mağaza Sayfası"} />
      <CenteredContainer300>
        <p className="tMessage">
          <span className="tRed tBold">Dikkat:</span> Tüm verileri silmek üzeresiniz! 
          Önceki menüden <span className="tBold">'Excel'e Aktar'</span> 
          butonu ile kayıtlı indirdiğinizden emin olun. Sileceğiniz veriler
          <span className="tBold">'Bitti'</span> statüsünde olan verilerdir. 
          Silmek için aşağıdaki alana <span className="tBold">'ONAYLIYORUM'</span> yazın. 
          <span className="tBold">'Verileri Sil'</span> butonuna tıklayın. 
          Silme işlemini iptal etmek için <span className="tBold">'Geri'</span> butonuna tıklayın.
        </p>
        <StyledInput
          type="text"
          placeholder=""
          style={{marginTop: '12px', color: "red", borderColor: "red"}}
          value={acknowledge}
          onChange={(e) => setAcknowledge(e.target.value)}
        />
        <StyledButton onClick={handleDelete}>Verileri Sil</StyledButton>
      </CenteredContainer300>
      {<p className="columnDiv">{message}</p>}
    </div>
  );
}
