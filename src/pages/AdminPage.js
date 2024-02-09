import React, { useState, useEffect } from "react";
import TableHeader from "../components/TableHeader";
import AdminTableRow from "../components/AdminTableRow";
import { DeleteById, FindAll, FindByStatus, Insert, UpdateRow } from "../mainTableHandler";
import StatusEnum from "../StatusEnum";
import LogOut from "../components/LogOut";

const AdminPage = ({ navigate }) => {
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
      <h2>Mağaza Sayfası</h2>
      <LogOut navigate={navigate} />
      <table>
        <TableHeader isAdmin={true} onFilterChange={loadDataByStatus} />
        <tbody>
          <AdminTableRow
            data={{status:StatusEnum.New}}
            isnew={true}
            onSave={async (value) => {
              if (
                value === null ||
                value.name.length === 0 ||
                value.detail.length === 0
              ) {
                alert("Alanları Kontrol Ediniz!");
                return;
              }
              await Insert(value);
              loadData();
            }}
          />
          {rows.map((row,key) => (
            <AdminTableRow
              data={row}
              key={row.id}
              onEdit={async (value) => {
                await UpdateRow(value);
                loadData();
              }}
              onDelete={async (value) => {
                console.log("DeleteById:", value)
                await DeleteById(value);
                loadData();
              }}
            />
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
