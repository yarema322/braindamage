import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export function initDatePicker() {
  flatpickr("#task-create-date", {
    dateFormat: "Y-m-d",
    allowInput: true,
  });
}
console.log("Date picker initialized.");