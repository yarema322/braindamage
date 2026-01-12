import "../../styles/styles.scss";
import "./dateShort.js";
import "./taskProgress.js";
import "./addTask.js";
import "../common/modalWindow.js";
import "../common/modalForm.js";
import "./dropDownRoles.js";
import { loadLayout } from "../common/layout";
import { initDatePicker } from "../common/datePicker.js";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/hamMenu.js";
import { initResizeHandler } from "../common/resizeHandler.js";
import { initClickOutside } from "../common/clickOutsideSidebar.js";
import { initFileUpload } from "../common/filePreview.js";
import { highlightSidebar } from "../common/highlightSidebar.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadLayout();

  highlightSidebar();
  initHamMenu();
  initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
  initClickOutside(".sidebar", ".ham__menu", ".overlay");
  initFileUpload("#drop-zone", "#task-image");
  initDatePicker();
});