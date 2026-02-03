import { renderTaskList} from "../common/render-task-list.js";

const completedFilter = (t) => t.status === "completed";

document.addEventListener("DOMContentLoaded", () => {
  renderTaskList("completed-task-list", completedFilter);
});