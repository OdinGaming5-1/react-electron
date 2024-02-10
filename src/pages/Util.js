export function CreateArray(start, length) {
  return Array.from({ length: length }, (v, i) => start + i);
}
