import taskSelectedTpl from "../../assets/partials/task-selected.hbs";
import { formatTaskDate } from "../common/format-task-date.js";
import { formatPriority } from "../common/format-priority.js";
import { formatStatus } from "../common/format-status.js";

let taskDetails;

document.addEventListener("DOMContentLoaded", () => {
    taskDetails = document.getElementById("task-details");
    renderEmptyState();
});

export function renderSelectedTask(task) {
    if (!taskDetails) {return;}

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
}

export function renderEmptyState() {
    if (!taskDetails) {return;}

    taskDetails.innerHTML = `
        <p class="task-details__greetings">Select a task to see details</p>
        <span class="task-details__underline"></span>
    `;
}

