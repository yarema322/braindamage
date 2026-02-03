import { renderTaskList } from "../common/render-task-list.js";

const vitalFilter = (t) => t.status !== "completed" && t.mode === "vital";

document.addEventListener("DOMContentLoaded", () => {
  renderTaskList("vital-task-list__container",vitalFilter);
});