import React from "react";
import { DeleteById, UpdateRow, UpdateStatus } from "../mainTableHandler";
import AdminTableRow from "../components/AdminTableRow";
import Title from "../components/Title";
import TableView from "../components/TableView";

export default function ListOldEntryPage({ navigate }) {
  function buildRow(row, loadData) {
    return (
      <AdminTableRow
        isOld={true}
        data={row}
        key={row.id}
        onEdit={async (value) => await UpdateRow(value).then((v) => loadData())}
        onCancel={async (value) => await UpdateStatus(row.id, value).then((v) => loadData())}
        onDelete={async (value) => await DeleteById(value).then((v) => loadData())}
      />
    );
  }
  return (
    <div className="columnDiv">
      <Title navigate={navigate} title={"Mağaza Sayfası"} />
      <TableView isAdmin isOld builder={buildRow} />
    </div>
  );
}
