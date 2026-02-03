import taskTpl from "../../assets/partials/task.hbs";
import { getTasksFromStorage } from "../common/storage.js";
import { toTemplateModel } from "../common/render-task.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("task-list__container");
  if (!container) return;

  const tasks = getTasksFromStorage();
  const taskInProgress = tasks.slice().filter(t => t.status !== "completed" && t.mode !== "vital");
  container.innerHTML = taskInProgress.map(t => taskTpl(toTemplateModel(t))).join("");  
});