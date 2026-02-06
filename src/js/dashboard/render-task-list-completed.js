import { getTasksFromStorage } from "../common/storage.js";
import completedTaskTpl from "../../assets/partials/task-completed.hbs";
import { completedTask } from "./render-task-completed.js";

export function renderCompletedTaskList(containerId, filterFn = () => true) {
  const container = document.getElementById(containerId);
  if (!container) {return;}

  const tasks = getTasksFromStorage();

  const filteredTasks = tasks.filter(filterFn);
  container.innerHTML = filteredTasks.map(t => completedTaskTpl(completedTask(t))).join("");
};