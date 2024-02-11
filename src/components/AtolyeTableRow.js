import React, { useState } from "react";
import StatusEnum from "../StatusEnum";

export default function AtolyeTableRow({ data, onSave }) {
  const [selectedOption, setSelectedOption] = useState(data.status);

  const handleChange = (event) => {
    onSave(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <tr
      className={
        (selectedOption === StatusEnum.Processing && "orangeRow") ||
        (selectedOption === StatusEnum.Done && "redRow") ||
        (selectedOption === StatusEnum.New && "greenRow") ||
        (selectedOption === StatusEnum.Cancel && "blueRow")
      }
    >
      <td>
        <textarea disabled value={data?.name} />
      </td>
      <td>
        <textarea style={{minWidth: '420px', maxWidth: '420px'}} disabled value={data?.detail} />
      </td>
      <td>
        <span>
          <select
            name="status"
            value={selectedOption}
            id="status"
            onChange={handleChange}
          >
            <option disabled value={StatusEnum.New}>
              {StatusEnum.New}
            </option>
            <option
              disabled={selectedOption === StatusEnum.Done}
              value={StatusEnum.Processing}
            >
              {StatusEnum.Processing}
            </option>
            <option value={StatusEnum.Cancel}>{StatusEnum.Cancel}</option>
            <option value={StatusEnum.Done}>{StatusEnum.Done}</option>
          </select>
        </span>
      </td>
    </tr>
  );
}
