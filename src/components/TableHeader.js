import React,{useState} from "react";
import StatusEnum from "../StatusEnum";

export default function TableHeader({ isAdmin, onFilterChange }) {
  const [statusFilter, setStatusFilter]=useState(0);
  const handleChange = (event) => {
    const value = event.target.value;
    setStatusFilter(value);
    let values = [];
    switch (value) {
      case 'Hepsi':
        values = [StatusEnum.New,StatusEnum.Processing,StatusEnum.Done];
        break;
      case 'Bittiler':
        values = [StatusEnum.Done];
        break;
      case 'Çalışılıyorlar':
        values = [StatusEnum.Processing];
        break;        
      case 'Yeniler':
        values = [StatusEnum.New];
        break;
      default:
        values = []
        break;
    }
    onFilterChange(values);
};
  return (
    <thead>
      <tr>
        <th>Müşteri Adı</th>
        <th>Açıklama</th>
        {isAdmin && (
          <>
            <th>İşlemler</th>
            <th>Oluşturulma(Tarih)</th>
            <th>Çalışılıyor(Tarih)</th>
            <th>Bitti(Tarih)</th>
          </>
        )}
        <th>Durum
          <select value={statusFilter} onChange={handleChange}>
            <option>Hepsi</option>
            <option>Bittiler</option>
            <option>Çalışılıyorlar</option>
            <option>Yeniler</option>
          </select>
        </th>
      </tr>
    </thead>
  );
}
