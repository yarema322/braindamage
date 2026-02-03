import taskTpl from "../../assets/partials/task.hbs";
import { getTasksFromStorage } from "../common/storage.js";
import { toTemplateModel } from "../common/render-task.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("vital-task-list__container");
    if (!container) return;

    const tasks = getTasksFromStorage();
    const vitalTasks = tasks.filter(task => task.mode === "vital" && task.status !== "completed");
    container.innerHTML = vitalTasks.map(task => taskTpl(toTemplateModel(task))).join("");
});

document.addEventListener("click", (e) => {
  const taskElement = e.target.closest("[data-task-id]");
  if (!taskElement) return;

  const taskId = taskElement.dataset.taskId;
  if (!taskId) return;

  const event = new CustomEvent("task:selected", { detail: taskId });
  document.dispatchEvent(event);
});