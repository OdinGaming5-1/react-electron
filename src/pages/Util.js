export function CreateArray(start, length) {
  return Array.from({ length: length }, (v, i) => start + i);
}

export function GetFormattedDate(date) {
  if (date === null || date === undefined || date === "") return "-";
  const date2 = new Date(date);
  return (
    ("0" + date2.getDate()).slice(-2) +
    "/" +
    ("0" + (date2.getMonth() + 1)).slice(-2) +
    "/" +
    date2.getFullYear() +
    "\n" +
    ("0" + date2.getHours()).slice(-2) +
    ":" +
    ("0" + date2.getMinutes()).slice(-2)
  );
}