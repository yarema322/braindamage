import "../../styles/styles.scss";
import "./date-short.js";
import "./taskProgress.js";
import { initAddTask } from "./add-task.js";
import "../common/modal-window.js";
import "./drop-down-roles.js";
import taskTpl from "../../assets/partials/task.hbs";

import taskCompleted from "../../assets/partials/task-completed.hbs";

import { loadLayout } from "../common/layout";
import { initDatePicker } from "../common/date-picker.js";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/ham-menu.js";
import { initResizeHandler } from "../common/resize-handler.js";
import { initClickOutside } from "../common/click-outside-sidebar.js";
import { initFileUpload } from "../common/file-preview.js";
import { highlightSidebar } from "../common/highlight-sidebar.js";
import { toTemplateModel } from "../common/render-task.js";
import { getTasksFromStorage } from "../common/storage.js";
import { completedTask } from "../common/render-task-list-completed.js";

document.addEventListener("DOMContentLoaded", async () => {
  const taskListContainer = document.getElementById("task-list");
  if (!taskListContainer) return;

  const tasks = getTasksFromStorage();
  const taskInProcess = tasks.slice().filter(t => t.status !== "completed");
  taskListContainer.innerHTML = taskInProcess.map(t => taskTpl(toTemplateModel(t))).join("");

  const taskListContainerCompleted = document.getElementById("completed-task-list");
  if (!taskListContainerCompleted) return;

  const completedTasks = tasks.filter(task => task.status === "completed");
  taskListContainerCompleted.innerHTML = completedTasks.map(t => taskCompleted(completedTask(t))).join("");

  await loadLayout();

  initAddTask();
  highlightSidebar();
  initHamMenu();
  initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
  initClickOutside(".sidebar", ".ham__menu", ".overlay");
  initFileUpload("#drop-zone", "#task-image");
  initDatePicker();
});