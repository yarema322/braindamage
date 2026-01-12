import "../../styles/styles.scss";
import { loadLayout } from "../common/layout";
document.addEventListener("DOMContentLoaded", () => {
  loadLayout();
});

import "../common/dateFull.js";
import "../common/modalWindow.js";
import "../common/modalForm.js";


import "./renderViewTask.js";
import "./editTask.js";
import { initEditTaskPrefill } from "./editTaskPrefill.js";
initEditTaskPrefill();

import "../common/historyBackButton.js";



import { initFileUpload } from "../common/filePreview.js";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/hamMenu.js";
import { initResizeHandler } from "../common/resizeHandler.js";
import { initClickOutside } from "../common/clickOutsideSidebar.js";
import { initDatePicker } from "../common/datePicker.js";

initHamMenu();
initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
initClickOutside(".sidebar", ".ham__menu", ".overlay");
initFileUpload("#drop-zone", "#task-image");
initDatePicker();