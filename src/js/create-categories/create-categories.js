import "../../styles/styles.scss";
import { loadLayout } from "../common/layout";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/hamMenu.js";
import { initResizeHandler } from "../common/resizeHandler.js";
import { initClickOutside } from "../common/clickOutsideSidebar.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadLayout();

  await import ("../common/dateFull.js");

  initHamMenu();
  initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
  initClickOutside(".sidebar", ".ham__menu", ".overlay");
});
