import React from "react";

export default function TableHeader({
  isAdmin = false,
  isOld = false,
  nameFilter,
  statusFilter,
  handleNameChange,
  handleStatusChange,
}) {
  return (
    <thead>
      <tr>
        <th>
          Müşteri Adı{" "}
          <input
            type="text"
            value={nameFilter}
            placeholder="arama"
            onChange={handleNameChange}
          />
        </th>
        <th>Açıklama</th>
        {isAdmin && (
          <>
            <th>Oluşturulma(Tarih)</th>
            <th>Çalışılıyor(Tarih)</th>
            <th>Bitti(Tarih)</th>
          </>
        )}
        {isAdmin && !isOld && (
          <th>
            Durum
            <select value={statusFilter} onChange={handleStatusChange}>
              <option>Hepsi</option>
              <option>Çalışılıyorlar</option>
              <option>Yeniler</option>
              <option>İptal Edilenler</option>
            </select>
          </th>
        )}
        {!isAdmin && (
          <th>
            Durum
            <select value={statusFilter} onChange={handleStatusChange}>
              <option>Hepsi</option>
              <option>Çalışılıyorlar</option>
              <option>Yeniler</option>
              <option>İptal Edilenler</option>
              <option>Bittiler</option>
            </select>
          </th>
        )}
        {isAdmin && <th>İşlemler</th>}
      </tr>
    </thead>
  );
}
