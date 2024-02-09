import React, { useState, useEffect } from "react";
import TableHeader from "../components/TableHeader";
import AtolyeTableRow from "../components/AtolyeTableRow";
import { FindAll,FindByStatus, UpdateStatus } from "../mainTableHandler";
import LogOut from "../components/LogOut";

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

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Atölye Sayfası</h2>
      <LogOut navigate={navigate} />
      <table>
        {rows.length > 0 && <TableHeader onFilterChange={loadDataByStatus} />}
        <tbody>
          {rows.length <=0 ? 
          <h3>Kayıt Yok</h3>
          : rows.map((row, key) => (
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
    </div>
  );
};

export default AtolyePage;
