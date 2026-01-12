import "../../styles/styles.scss";
import { loadLayout } from "../common/layout";
document.addEventListener("DOMContentLoaded", () => {
  loadLayout();
});

import "../common/dateFull.js";


import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/hamMenu.js";
import { initResizeHandler } from "../common/resizeHandler.js";
import { initClickOutside } from "../common/clickOutsideSidebar.js";




initHamMenu();
initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
initClickOutside(".sidebar", ".ham__menu", ".overlay");
