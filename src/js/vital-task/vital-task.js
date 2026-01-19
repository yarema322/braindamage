import "../../styles/styles.scss";
import "./render-vital-task.js";
import { loadLayout } from "../common/layout";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/ham-menu.js";
import { initResizeHandler } from "../common/resize-handler.js";
import { initClickOutside } from "../common/click-outside-sidebar.js";
import { highlightSidebar } from "../common/highlight-sidebar.js";


document.addEventListener("DOMContentLoaded", async () => {
  await loadLayout();

  initHamMenu();
  initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
  initClickOutside(".sidebar", ".ham__menu", ".overlay");
  highlightSidebar();
});