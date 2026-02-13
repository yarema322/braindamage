import "../../styles/styles.scss";
import "../common/render-task-selected.js";
import "../common/task-selected-actions.js"
import "../common/modal-window.js";

import "./task-todo.js";

import { loadLayout } from "../common/layout";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/ham-menu.js";
import { initResizeHandler } from "../common/resize-handler.js";
import { initClickOutside } from "../common/click-outside-sidebar.js";
import { highlightSidebar } from "../common/highlight-sidebar.js";

import { initEditTaskPrefill } from "../view-task/edit-task-prefill.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadLayout();

  highlightSidebar();
  initHamMenu();
  initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
  initClickOutside(".sidebar", ".ham__menu", ".overlay");

  initEditTaskPrefill();
});


