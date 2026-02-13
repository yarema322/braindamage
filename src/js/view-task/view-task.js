import "../../styles/styles.scss";
import "../common/modal-window.js";
import "../common/history-back-button.js";

import "./render-view-task.js";
import "./edit-task.js";

import { loadLayout } from "../common/layout";
import { initFileUpload } from "../common/file-preview.js";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/ham-menu.js";
import { initResizeHandler } from "../common/resize-handler.js";
import { initClickOutside } from "../common/click-outside-sidebar.js";
import { initDatePicker } from "../common/date-picker.js";
import { highlightSidebar } from "../common/highlight-sidebar.js";

import { initEditTaskPrefill } from "./edit-task-prefill.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadLayout();

  highlightSidebar();
  initHamMenu();
  initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
  initClickOutside(".sidebar", ".ham__menu", ".overlay");
  initFileUpload("#drop-zone", "#task-image");
  initDatePicker();
  initEditTaskPrefill();
}); 