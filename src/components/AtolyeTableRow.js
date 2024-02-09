import React, { useState } from "react";
import StatusEnum from "../StatusEnum";

export default function AtolyeTableRow({ data, onSave }) {

  const [selectedOption, setSelectedOption] = useState(data.status);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        onSave(event.target.value);
    };

  return (
    <tr class={(selectedOption===StatusEnum.Processing && "orangeRow")|| 
    (selectedOption===StatusEnum.Done && "redRow")|| 
    (data?.status === StatusEnum.New && "greenRow")||
    (data?.status === StatusEnum.Processing && "orangeRow")||
    (data?.status === StatusEnum.Done && "redRow")}
    >
      <td>
        <input
          disabled
          type="text"
          placeholder="Ahmet Aslan"
          value={data?.name}
        />
      </td>
      <td>
        <textarea
          disabled
          placeholder="Kolye Yapımı"
          value={data?.detail}
        />
      </td>
      <td>
        <span>
          <select name="status" value={selectedOption} id="status" onChange={handleChange}>
            <option disabled value={StatusEnum.New}>{StatusEnum.New}</option>
            <option disabled={selectedOption===StatusEnum.Done} value={StatusEnum.Processing}>
              {StatusEnum.Processing}
            </option>
            <option value={StatusEnum.Done}>{StatusEnum.Done}</option>
          </select>
        </span>
      </td>
    </tr>
  );
}
