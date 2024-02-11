import React, { useEffect, useState } from "react";
import StatusEnum from "../StatusEnum";
import { GetFormattedDate } from "../pages/Util";

export default function AdminTableRow({ data, onEdit, onCancel, isOld }) {
  const [editable, setEditable] = useState(false);
  const [state, setState] = useState(data);
  const [className, setClassName] = useState(getClassNameFromStatus());

  function getClassNameFromStatus() {
    switch (state.status) {
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
    setState({ ...state, [name]: e });
  };

  useEffect(() => {
    setClassName(getClassNameFromStatus());
  }, [state.status]);

  return (
    <tr className={className}>
      <td>
        <textarea
          disabled={!editable}
          placeholder="Müşteri adını giriniz"
          value={state.name}
          onChange={(e) => setField({ name: "name", e: e.target.value })}
        />
      </td>
      <td>
        <textarea
          disabled={!editable}
          placeholder="Yapılacak işin açıklamasını giriniz"
          value={state.detail}
          onChange={(e) => setField({ name: "detail", e: e.target.value })}
        />
      </td>
      <td>{GetFormattedDate(state.createdDate)}</td>
      <td>{GetFormattedDate(state.processDate)}</td>
      <td>{GetFormattedDate(state.finishedDate)}</td>
      {!isOld && (
        <td>
          <span disabled={!editable}>{state.status}</span>
        </td>
      )}
      <td>
        {onEdit && state.status === StatusEnum.New && (
          <button
            onClick={async function () {
              if (editable) {
                let val = { ...state };
                delete val.status;
                await onEdit(val);
              }
              setEditable((p) => !p);
            }}
          >
            {editable ? "Tamamla" : "Düzenle"}
          </button>
        )}
        {onCancel && state.status !== StatusEnum.Cancel && (
          <button
            onClick={async () => {
              await onCancel(StatusEnum.Cancel);
              setState({ ...state, status: StatusEnum.Cancel });
            }}
          >
            İptal
          </button>
        )}
      </td>
    </tr>
  );
}
