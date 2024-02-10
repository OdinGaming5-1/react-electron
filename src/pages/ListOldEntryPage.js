import React, { useState, useEffect } from "react";
import {
    DeleteById,
  FindAll,
  FindByNameOld,
  FindByStatus,
  UpdateRow,
  UpdateStatus,
} from "../mainTableHandler";
import AdminTableRow from "../components/AdminTableRow";
import TableHeader from "../components/TableHeader";
import Title from "../components/Title";

export default function ListOldEntryPage({ navigate }) {
  const [rows, setRows] = useState([]);

  async function loadData() {
    const data = await FindAll();
    setRows(data);
  }
  async function loadDataByStatus(values) {
    const data = await FindByStatus(values);
    setRows(data);
    console.log(data);
  }
  async function loadDataByName(value) {
    if(value==="")
      loadDataByStatus(['Bitti']);
    const data = await FindByNameOld(value);
    setRows(data);
  }

  useEffect(() => {
    loadDataByStatus(['Bitti']);
  }, []);

  return (
    <div className="columnDiv">
      <Title navigate={navigate} title={"Mağaza Sayfası"} />
      <button onClick={() => {navigate('/admin')}} >Geri</button>
      <table>
      <TableHeader isAdmin={true} onFilterChange={loadDataByStatus} onNameFilter={loadDataByName} isOld={true} isAtolye={false}/>
        <tbody>
          {rows.map((row) => (
            <AdminTableRow isOld={true}
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
