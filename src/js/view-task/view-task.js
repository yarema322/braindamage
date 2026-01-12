import "../../styles/styles.scss";
import "../common/modalWindow.js";
import "../common/modalForm.js";
import "../common/historyBackButton.js";
import "./renderViewTask.js";
import "./editTask.js";
import { loadLayout } from "../common/layout";
import { initFileUpload } from "../common/filePreview.js";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/hamMenu.js";
import { initResizeHandler } from "../common/resizeHandler.js";
import { initClickOutside } from "../common/clickOutsideSidebar.js";
import { initDatePicker } from "../common/datePicker.js";
import { initEditTaskPrefill } from "./editTaskPrefill.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadLayout();

  initHamMenu();
  initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
  initClickOutside(".sidebar", ".ham__menu", ".overlay");
  initFileUpload("#drop-zone", "#task-image");
  initDatePicker();
  initEditTaskPrefill();
});