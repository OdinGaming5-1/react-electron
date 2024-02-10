import React, { useState } from "react";
import StatusEnum from "../StatusEnum";

export default function AdminTableRow({
  data,
  isnew = false,
  onSave,
  onEdit,
  onCancel,
  onDelete,
  isOld
}) {
  const [editable, setEditable] = useState(isnew);
  const [state, setState] = useState(data);

  function GetFormattedDate(date) {
    if (date === null || date === undefined) return "-";
    const date2 = new Date(date);
    return (
      ("0" + date2.getDate()).slice(-2) +
      "/" +
      ("0" + (date2.getMonth() + 1)).slice(-2) +
      "/" +
      date2.getFullYear() +
      " " +
      ("0" + date2.getHours()).slice(-2) +
      ":" +
      ("0" + date2.getMinutes()).slice(-2)
    );
  }

  const setField = ({ name, e }) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  return (
    <tr
      className={ (state?.status === StatusEnum.New && "greenRow") ||
        (state?.status === StatusEnum.Processing && "orangeRow") ||
        (state?.status === StatusEnum.Done && "redRow") ||
        (state?.status === StatusEnum.Cancel && "blueRow")
      }
    >
      <td>
        <input
          disabled={!editable}
          type="text"
          placeholder="Müşteri adını giriniz"
          value={state?.name}
          onChange={(e) => setField({ name: "name", e: e })}
        />
      </td>
      <td>
        <textarea
          disabled={!editable}
          placeholder="Yapılacak işin açıklamasını giriniz"
          value={state?.detail}
          onChange={(e) => setField({ name: "detail", e: e })}
        />
      </td>
      <td>{GetFormattedDate(state?.createdDate)}</td>
      <td>{GetFormattedDate(state?.processDate)}</td>
      <td>{GetFormattedDate(state?.finishedDate)}</td>
      {!isOld &&<td>
         <span disabled={!editable}>{state?.status}</span>
      </td>}
      <td>
        {onSave && (
          <button
            onClick={() => {
              onSave(state);
              setState({ status: StatusEnum.New, name: "", detail: "" });
            }}
          >
            Ekle
          </button>
        )}
        {onEdit && state.status === StatusEnum.New && (
          <button
            onClick={function () {
              if (editable) {
                onEdit(state);
              }
              setEditable((p) => !p);
            }}
          >
            {editable ? "Tamamla" : "Düzenle"}
          </button>
        )}
        <button
          onClick={() => {
            if (onCancel) {
              onCancel(StatusEnum.Cancel);
              return;
            }
            setState(null);
          }}
        >
          İptal
        </button>
        <button
          onClick={() => {
            if (onDelete) {
              onDelete(data?.id);
              return;
            }
            setState(null);
          }}
        >
          Sil
        </button>
      </td>
    </tr>
  );
  // }
}
