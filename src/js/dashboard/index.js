import "../../styles/styles.scss";
import "./date-short.js";
import "../common/modal-window.js";

import "./taskProgress.js";
import "./drop-down-roles.js";

import { loadLayout } from "../common/layout";
import { initDatePicker } from "../common/date-picker.js";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/ham-menu.js";
import { initResizeHandler } from "../common/resize-handler.js";
import { initClickOutside } from "../common/click-outside-sidebar.js";
import { initFileUpload } from "../common/file-preview.js";
import { highlightSidebar } from "../common/highlight-sidebar.js";
import { renderTaskList } from "../common/render-task-list.js";

import { initAddTask } from "./add-task.js";
import "./render-task-list-completed.js";

const dashboardFilter = (t) => t.status !== "completed";

document.addEventListener("DOMContentLoaded", async () => {
  renderTaskList("dashboard-task-list__container", dashboardFilter);

  await loadLayout();

  initAddTask();
  highlightSidebar();
  initHamMenu();
  initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
  initClickOutside(".sidebar", ".ham__menu", ".overlay");
  initFileUpload("#drop-zone", "#task-image");
  initDatePicker();
});