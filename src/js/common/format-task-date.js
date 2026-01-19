export function formatTaskDate(isoDate) {
  if (!isoDate || !isoDate.includes("-")) {
    return isoDate || "";
  }

  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}
