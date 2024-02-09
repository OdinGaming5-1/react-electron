import React, { useState } from "react";
import StatusEnum from "../StatusEnum";

export default function TableHeader({ isAdmin, onFilterChange,onNameFilter }) {
  const [statusFilter, setStatusFilter] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setStatusFilter(value);
    let values = [];
    switch (value) {
      case "Hepsi":
        values = [StatusEnum.New, StatusEnum.Processing, StatusEnum.Cancel, StatusEnum.Done];
        break;
      case "Bittiler":
        values = [StatusEnum.Done];
        break;
      case "Çalışılıyorlar":
        values = [StatusEnum.Processing];
        break;
      case "Yeniler":
        values = [StatusEnum.New];
        break;
      case "İptal Edilenler":
        values = [StatusEnum.Cancel];
        break;
      default:
        values = [];
        break;
    }
    onFilterChange(values);
  };
  function handleNameChange(e){
    onNameFilter(e.target.value);
    setNameFilter(e.target.value);
  }
  return (
    <thead>
      <tr>
        <th>Müşteri Adı <input type="text" value={nameFilter} placeholder="arama" onChange={handleNameChange}/></th>
        <th>Açıklama</th>
        {isAdmin && (
          <>
            <th>Oluşturulma(Tarih)</th>
            <th>Çalışılıyor(Tarih)</th>
            <th>Bitti(Tarih)</th>
          </>
        )}
        <th>
          Durum
          <select value={statusFilter} onChange={handleChange}>
            <option>Hepsi</option>
            <option>Bittiler</option>
            <option>Çalışılıyorlar</option>
            <option>Yeniler</option>
            <option>İptal Edilenler</option>
          </select>
        </th>
        {isAdmin && <th>İşlemler</th>}
      </tr>
    </thead>
  );
}
