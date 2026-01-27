import taskTpl from "../../assets/partials/task.hbs";
import { getTasksFromStorage } from "../common/storage.js";
import { toTemplateModel } from "../common/render-task-list.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("task-list__container");
  if (!container) return;

  const tasks = getTasksFromStorage();
  const taskInProgress = tasks.slice().filter(t => t.status !== "completed");
  container.innerHTML = taskInProgress.map(t => taskTpl(toTemplateModel(t))).join("");  
});

document.addEventListener("click", (e) => {
  const taskEl = e.target.closest(".task[data-task-id]");
  if (!taskEl) return;

  const taskId = taskEl.dataset.taskId;

  document.dispatchEvent(
    new CustomEvent("task:selected", { detail: taskId })
  );
});