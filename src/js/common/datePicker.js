import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export function initDatePicker() {
  flatpickr("#task-date", {
    dateFormat: "d.m.Y",
    allowInput: true,
  });
}
console.log("Date picker initialized.");