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
    <thead className="container">
      <tr>
        <th>
          Müşteri Adı{" "}
          <br />
          <input
            type="text"
            style={{ marginTop: "8px", minWidth: '120px', maxWidth: '120px' }}
            value={nameFilter}
            placeholder="arama"
            onChange={handleNameChange}
          />
        </th>
        <th>Açıklama</th>
        {isAdmin && (
          <>
            <th style={{width: '80px'}}>Sipariş</th>
            <th style={{width: '80px'}}>İşlem</th>
            <th style={{width: '80px'}}>Bitiş</th>
          </>
        )}
        {isAdmin && !isOld && (
          <th style={{width: '80px'}}>
            Durum
          <br />
            <select
              value={statusFilter}
              style={{ marginTop: "8px" }}
              onChange={handleStatusChange}
            >
              <option>Hepsi</option>
              <option>Yeni</option>
              <option>Çalışılıyor</option>
              <option>İptal</option>
            </select>
          </th>
        )}
        {!isAdmin && (
          <th>
            Durum
          <br />
            <select
              value={statusFilter}
              style={{ marginTop: "8px" }}
              onChange={handleStatusChange}
            >
              <option>Hepsi</option>
              <option>Yeni</option>
              <option>Çalışılıyor</option>
              <option>İptal</option>
              <option>Bitti</option>
            </select>
          </th>
        )}
        {isAdmin && <th style={{width: '80px'}}>İşlemler</th>}
      </tr>
    </thead>
  );
}
