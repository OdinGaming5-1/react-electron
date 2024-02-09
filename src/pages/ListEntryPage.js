import React, { useState, useEffect } from "react";
import {
    DeleteById,
  FindAll,
  FindByName,
  FindByStatus,
  UpdateRow,
  UpdateStatus,
} from "../mainTableHandler";
import AdminTableRow from "../components/AdminTableRow";
import TableHeader from "../components/TableHeader";
import Title from "../components/Title";

export default function ListEntryPage({ navigate }) {
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
      <Title navigate={navigate} title={"Mağaza Sayfası"} />
      <button onClick={() => {navigate('/admin')}} >Geri</button>
      <table>
        <TableHeader isAdmin={true} onFilterChange={loadDataByStatus} onNameFilter={loadDataByName}/>
        <tbody>
          {rows.map((row) => (
            <AdminTableRow
              data={row}
              key={row.id}
              onEdit={async (value) => {
                await UpdateRow(value);
                loadData();
              }}
              onCancel={async (value) => {
                console.log("UpdateStatus-Cancel:", value);
                await UpdateStatus(row.id, value);
                loadData();
              }}
              onDelete={async (value) => {
                console.log("DeleteById:", value);
                await DeleteById(value);
                loadData();
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
