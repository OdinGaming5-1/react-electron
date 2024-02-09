import React, { useState, useEffect } from "react";
import TableHeader from "../components/TableHeader";
import AtolyeTableRow from "../components/AtolyeTableRow";
import { FindAll,FindByStatus, UpdateStatus,FindByName } from "../mainTableHandler";
import Title from "../components/Title";

const AtolyePage = ({ navigate }) => {
  const [rows, setRows] = useState([]);

  async function loadData() {
    const data = await FindAll();
    setRows(data);
  }
  async function loadDataByStatus(values) {
    const data = await FindByStatus(values);
    setRows(data);
  }
  async function loadDataByName(value) {
    if(value==="")
      loadData();
    const data = await FindByName(value);
    setRows(data);
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="columnDiv">
      <Title navigate={navigate} title={"Atölye Sayfası"}/>
      <table>
        <TableHeader onFilterChange={loadDataByStatus} onNameFilter={loadDataByName}/>
        <tbody>
          {rows.length > 0 && rows.map((row) => (
            <AtolyeTableRow
              key={row.id}
              data={row}
              onSave={(value) => {
                UpdateStatus(row.id, value);
                loadData();
              }}
            />
          ))}
        </tbody>
      </table>
      {rows.length <= 0 && <p>Kayıt Yok</p>}
    </div>
  );
};

export default AtolyePage;
