import { getTasksFromStorage, getTaskById, updateTaskById, deleteTaskById } from "./storage.js";
import taskTpl from "../../assets/partials/task.hbs";
import { toTemplateModel } from "../common/render-task.js";
import { renderSelectedTask, renderEmptyState } from "./render-task-selected.js";

let activeContainerId = null;
let activeFilterFn = (t) => true;

export function renderTaskList(containerId, filterFn) {
    if (containerId) {
        activeContainerId = containerId;
    }

    if (filterFn) {
        activeFilterFn = filterFn;
    }

    if (!activeContainerId) return;

    const container = document.getElementById(activeContainerId);
    if (!container) return;

    const tasks = getTasksFromStorage();

    const filteredTasks = tasks.filter(activeFilterFn);
    
    container.innerHTML = filteredTasks.map(t => taskTpl(toTemplateModel(t))).join("");
};

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".task__button");
    if (!btn) return;

    const taskEl = btn.closest(".task");
    if (!taskEl) return;

    const taskId = taskEl.dataset.taskId;
    if (!taskId) return;

    // VIEW
    if (btn.classList.contains("task__button--view")) {
        const task = getTaskById(taskId);
        if (!task) return;
        renderSelectedTask(task);
    }

    // VITAL
    if (btn.classList.contains("task__button--vital")) {
        const confirmVital = confirm("Get this task as vital?");
        if (!confirmVital) return;

        updateTaskById(taskId, { mode: "vital", status: "in-progress" });
        
        renderTaskList(); 
    }

    // EDIT 

    // DELETE
    if (btn.classList.contains("task__button--delete")) {
        const confirmDelete = confirm("Delete this task?");
        if (!confirmDelete) return;

        deleteTaskById(taskId);
        renderEmptyState();
        renderTaskList(); 
    }
    
    // FINISH
    if (btn.classList.contains("task__button--finish")) {
        const confirmFinish = confirm("Mark this task as completed?");
        if (!confirmFinish) return;

        updateTaskById(taskId, {
            status: "completed",
            completedAt: new Date().toISOString()
        });
        renderTaskList();
    }
});