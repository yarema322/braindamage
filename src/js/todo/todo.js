import "@styles/styles.scss";

import "../common/dateFull.js";
import "./todoTask.js";
import "./taskSelected.js";

import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/hamMenu.js";
import { initResizeHandler } from "../common/resizeHandler.js";
import { initClickOutside } from "../common/clickOutsideSidebar.js";

initHamMenu();
initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
initClickOutside(".sidebar", ".ham__menu", ".overlay");