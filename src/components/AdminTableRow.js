import React, { useState } from "react";
import StatusEnum from "../StatusEnum";
import { GetFormattedDate } from "../pages/Util";

export default function AdminTableRow({
  data,
  onSave,
  onEdit,
  onCancel,
  isOld,
}) {
  const [editable, setEditable] = useState(false);
  const [state, setState] = useState(data);
  const [className] = useState(getClassNameFromStatus());

  function getClassNameFromStatus() {
    switch (state?.status) {
      case StatusEnum.New:
        return "greenRow";
      case StatusEnum.Processing:
        return "orangeRow";
      case StatusEnum.Cancel:
        return "blueRow";
      case StatusEnum.Done:
        return "redRow";
      default:
        return "";
    }
  }

  const setField = ({ name, e }) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  return (
    <tr className={className}>
      <td>
        <input
          disabled={!editable}
          type="text"
          style={{width: '140px'}}
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
      {!isOld && (
        <td>
          <span disabled={!editable}>{state?.status}</span>
        </td>
      )}
      <td>
        {onSave && (
          <button
            onClick={() => {
              onSave(state);
              setState({ status_id: 1, name: "", detail: "" });
            }}
          >
            Ekle
          </button>
        )}
        {onEdit && state?.status === StatusEnum.New && (
          <button
            onClick={function () {
              if (editable) {
                let val = { ...state };
                delete val.status;
                onEdit(val);
              }
              setEditable((p) => !p);
            }}
          >
            {editable ? "Tamamla" : "Düzenle"}
          </button>
        )}
        {onCancel && state?.status !== StatusEnum.Cancel && (
          <button onClick={() => onCancel(StatusEnum.Cancel)}>İptal</button>
        )}
        {/* <button
          onClick={() => {
            if (onDelete) {
              onDelete(data?.id);
              return;
            }
            setState(null);
          }}
        >
          Sil
        </button> */}
      </td>
    </tr>
  );
}
