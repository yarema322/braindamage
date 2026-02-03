import { renderTaskList } from "../common/render-task-list.js";

const todoFiler = (t) => t.status !== "completed" && t.mode !== "vital";

document.addEventListener("DOMContentLoaded", () => {
  renderTaskList("task-list__container",todoFiler);
});