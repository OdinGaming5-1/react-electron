import React from "react";
import AtolyeTableRow from "../components/AtolyeTableRow";
import { UpdateStatus } from "../mainTableHandler";
import Title from "../components/Title";
import TableView from "../components/TableView";

const AtolyePage = ({ navigate }) => {
  function buildRow(row, loadData) {
    return (
      <AtolyeTableRow
        data={row}
        key={row.id}
        onSave={async (value) => await UpdateStatus(row.id, value).then((v) => loadData())}
      />
    );
  }
  return (
    <div className="columnDiv">
      <Title navigate={navigate} title={"Atölye Sayfası"} shouldPop={false} />
      <TableView builder={buildRow} />
    </div>
  );
};

export default AtolyePage;
