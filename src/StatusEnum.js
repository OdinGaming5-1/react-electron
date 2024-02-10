const StatusEnum = {
  New: "Yeni",
  Processing: "Çalışılıyor",
  Cancel: "İptal",
  Done: "Bitti",
};

export function findByKey(key) {
  return Object.keys(StatusEnum)
    .filter((e) => e === key)
    .map((k, v) => v)
    .at(0);
}

export function all() {
  return Object.values(StatusEnum);
}

export function notEquals(enumValue) {
  return all().filter((e) => e !== enumValue);
}

export function getId(value) {
  return Object.values(StatusEnum).findIndex((v, i) => v === value) + 1;
}

export function getValue(id) {
  return Object.values(StatusEnum).find((v, i) => i + 1 === id);
}

export function getStatusFilter(value) {
  switch (value) {
    case "Hepsi":
      return all();
    case "Bittiler":
      return [StatusEnum.Done];
    case "Çalışılıyorlar":
      return [StatusEnum.Processing];
    case "Yeniler":
      return [StatusEnum.New];
    case "İptal Edilenler":
      return [StatusEnum.Cancel];
    default:
      return [];
  }
}

export default StatusEnum;
