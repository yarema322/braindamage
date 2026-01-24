import taskSelectedTpl from "../../assets/partials/task-selected.hbs";
import { formatTaskDate } from "../common/format-task-date.js";
import { formatPriority } from "../common/format-priority.js";
import { formatStatus } from "../common/format-status.js";
import { deleteTaskById } from "../common/delete-task-by-id.js";
import { getTaskById } from "./storage.js";

let taskDetails;

document.addEventListener("DOMContentLoaded", () => {
    taskDetails = document.getElementById("task-details");
    renderEmptyState();
});

document.addEventListener("task:selected", (e) => {
    const taskId = e.detail;
    if (!taskId) return;

    const task = getTaskById(taskId);
    if (!task) return;

    renderSelectedTask(task);
});

// if no selected task
function renderEmptyState () {
    taskDetails.innerHTML = `
        <p class="task-details__greetings">Select a task to see details</p>
        <span class="task-details__underline"></span>
    `;
};

document.addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-view-task]");
    const deleteBtn = e.target.closest("[data-delete-button]");
    const taskEditBtn = e.target.closest(".task-details__button--edit");

    if (editBtn) {
        const id = editBtn.dataset.taskId;
        if (!id) return;

        redirectToViewTask(id);
    }

    if (deleteBtn) {
        const id = deleteBtn.dataset.taskId;
        if (!id) return;

        const confirmed = confirm("Delete this task?");
        if (!confirmed) return;

        deleteTaskById(id);
    }

    if (taskEditBtn) {
        const detailsItem = taskEditBtn.closest(".task-details__item");
        if (!detailsItem) return;

        const taskId = detailsItem.dataset.taskId;
        if (!taskId) return;

        window.location.href = `view-task.html?id=${taskId}`;
    }
});

export function renderSelectedTask(task) {
    if (!taskDetails) return;

    const model = {
        id: task.id,

        image: task.image || "",

        taskTitle: task.title,

        priority: task.priority,
        priorityLabel: formatPriority(task.priority),

        status: task.status,
        statusLabel: formatStatus(task.status),

        createdAtLabel: formatTaskDate(task.createdAt),

        taskDescription: task.description,
    };

    taskDetails.innerHTML = taskSelectedTpl(model);
};

function redirectToViewTask(id) {
    window.location.href = `view-task.html?id=${id}`;
}

document.addEventListener("task:deleted", () => {
    renderEmptyState();
});