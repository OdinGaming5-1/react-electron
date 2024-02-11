import React from "react";
import { UpdateRow, UpdateStatus } from "../mainTableHandler";
import AdminTableRow from "../components/AdminTableRow";
import Title from "../components/Title";
import TableView from "../components/TableView";

export default function ListEntryPage({ navigate }) {
  function buildRow(row, loadData) {
    return (
      <AdminTableRow
        data={row}
        key={row.id}
        onEdit={async (value) => {
          await UpdateRow(value);
          await loadData();
          console.log("onEdit");
        }}
        onCancel={async (value) => {
          await UpdateStatus(row.id, value);
          await loadData();
          console.log("onCancel");
        }}
      />
    );
  }
  return (
    <div className="columnDiv">
      <Title navigate={navigate} title={"Mağaza Sayfası"} />
      <TableView isAdmin builder={buildRow} />
    </div>
  );
}
