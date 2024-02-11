import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import StatusEnum, { all, getStatusFilter } from "../StatusEnum";
import { FindByNameAndStatus } from "../mainTableHandler";

export default function TableView({ builder, isAdmin = false, isOld = false }) {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  //const [itemCount, setItemCount] = useState(5);
  const [itemCount] = useState(6);
  const [pageCount, setPageCount] = useState(1);
  const [statusFilter, setStatusFilter] = useState(isOld ? [StatusEnum.Done] : all());
  const [statusIndex, setStatusIndex] = useState(0);
  const [nameFilter, setNameFilter] = useState("");

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatusIndex(value);
    const filter = getStatusFilter(value);
    setStatusFilter(filter);
  };
  function handleNameChange(e) {
    setNameFilter(e.target.value);
  }

  async function getPageCount(count) {
    const value = Math.ceil(count / itemCount);
    setPageCount(value);
  }
  async function loadData(shouldSetPage=false) {
    const { data, length } = await FindByNameAndStatus({
      name: nameFilter,
      status: statusFilter,
      page: page,
      itemCount: itemCount,
    });
    if(shouldSetPage) setPage(1);
    setRows(data);
    await getPageCount(length);
  }
  useEffect(() => {
    loadData(true);
    // eslint-disable-next-line
  }, [itemCount, nameFilter, statusFilter]);
  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="columnDiv">
      <table>
        <TableHeader
          isAdmin={isAdmin}
          isOld={isOld}
          nameFilter={nameFilter}
          statusFilter={statusIndex}
          handleNameChange={handleNameChange}
          handleStatusChange={handleStatusChange}
        />
        <tbody>{rows.map((row) => builder(row, loadData))}</tbody>
      </table>
      {rows.length <= 0 && <p>Kayıt Yok</p>}
      <div className="rowDiv" style={{marginTop: '16px', marginBottom: '24px'}}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>{'<'}</button>
        {Array.from({ length: Math.min(pageCount - page + 1, 4) }, (v, i) => i + page + (page === 1 ? 0 : -1)).map((p) => (
          <button className={page === p ? "selectedPage" : ""} key={p} onClick={() => setPage(p)}>
            {p}
          </button>
        ))}
        <button disabled={page > pageCount - 4} onClick={() => setPage(page + 1)}>{'>'}</button>
      </div>
      {/* <div>
        {[5, 8, 12].map((c) => (
          <button key={c} onClick={() => setItemCount(c)}>{c}</button>
        ))}
      </div> */}
    </div>
  );
}
