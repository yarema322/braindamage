import { formatTaskDate } from "../common/format-task-date.js";
import { formatPriority } from "../common/format-priority.js";
import { formatStatus } from "../common/format-status.js";
import { getTaskById, updateTaskById, getTaskIdFromUrl, deleteTaskById } from "../common/storage.js";

// id from URL


// process of rendering
document.addEventListener("DOMContentLoaded", () => {
    const taskId = getTaskIdFromUrl();
    if (!taskId) return;

    const task = getTaskById(taskId);
    if (!task) return;

    renderViewTask(task);
});

// render task
const containerViewTask = document.querySelector(".view-task");
const template = document.getElementById("view-task-template");

export function renderViewTask(task) {
    containerViewTask.innerHTML = "";

    const fragment = template.content.cloneNode(true);

    // img
    const img = fragment.querySelector(".view-task__header-img");
    if (task.image) {
        img.src = task.image;
    } else {
        img.remove();
    }

    // task title
    fragment.querySelector(".view-task__title").textContent = task.title;
    // task priority
    const priorityViewTask = fragment.querySelector(".view-task__priority");
    
    if (task.priority) {
        priorityViewTask.innerHTML = `
            Priority: <span class="view-task__priority--${task.priority}">
                ${formatPriority(task.priority)}
            </span>
            `;
    } else {
        priorityViewTask.remove();
    }

    // task status
    const statusViewTask = fragment.querySelector(".view-task__status");

    if (task.status) {
        statusViewTask.innerHTML = `
            Status: <span class="view-task__status--${task.status}">
                ${formatStatus(task.status)}
            </span>
            `;
    } else {
        statusViewTask.remove();
    }
    // task date
    const createdOn = fragment.querySelector(".view-task__date");
    createdOn.textContent = `Created on: ${formatTaskDate(task.createdAt)}`;
    // task description
    fragment.querySelector(".view-task__description").textContent = task.description;

    containerViewTask.append(fragment);
}

// delete task 
document.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("[data-delete-task]");
    if (!deleteBtn) return;

    const taskId = getTaskIdFromUrl();
    if (!taskId) return;

    const confirmed = confirm("Delete this task?");
    if (!confirmed) return;

    deleteTaskById(taskId);

    window.location.href = "todo.html";
});

// vital button 

document.addEventListener("click", (e) => {
    const vitalBtn = e.target.closest("[data-vital-task]");
    if (!vitalBtn) return;

    const taskId = getTaskIdFromUrl();
    if (!taskId) return;

    const confirmVital = confirm("Get this task vital status?");
    if (!confirmVital) return;

    updateTaskById(taskId, { mode: "vital", status: "in-progress" });
    window.location.reload();
});