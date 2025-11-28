import "../../styles/styles.scss";

import "../common/dateFull.js";
import "./dateShort.js";


import "./taskProgress.js";

import "./highlightDashboard.js";

import "./modalForm.js";
import "./modalWindow.js";

import "./dropDownRoles.js"


import { showFileNames, initFileUpload } from "./filePreview.js";
import { throttle } from "../common/throttle.js";
import { initHamMenu } from "../common/hamMenu.js";
import { initResizeHandler } from "../common/resizeHandler.js";
import { initClickOutside } from "../common/clickOutsideSidebar.js";
import { initDatePicker } from "./datePicker.js";


initHamMenu();
initResizeHandler(".sidebar", ".ham__menu", ".overlay", throttle);
initClickOutside(".sidebar", ".ham__menu", ".overlay");
initFileUpload("#drop-zone", "#task-image");
initDatePicker();