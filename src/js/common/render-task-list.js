import { getTasksFromStorage } from "./storage.js";
import taskTpl from "../../assets/partials/task.hbs";
import { toTemplateModel } from "../common/render-task.js";

export function renderTaskList(containerId, filterFn = (t) => true) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const tasks = getTasksFromStorage();

    const filteredTasks = tasks.filter(filterFn);
    container.innerHTML = filteredTasks.map(t => taskTpl(toTemplateModel(t))).join("");
};
