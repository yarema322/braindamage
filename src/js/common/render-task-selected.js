import taskSelectedTpl from "../../assets/partials/task-selected.hbs";
import { formatTaskDate } from "../common/format-task-date.js";
import { formatPriority } from "../common/format-priority.js";
import { formatStatus } from "../common/format-status.js";
import { deleteTaskById } from "../common/delete-task-by-id.js";
import { getTaskById, updateTaskById } from "./storage.js";
import { renderTaskList } from "../common/render-task-list.js";

let taskDetails;

document.addEventListener("DOMContentLoaded", () => {
    taskDetails = document.getElementById("task-details");
    renderEmptyState();
});

document.addEventListener("click", (e) => {
    // view
    const btn = e.target.closest(".task__button");
    if (!btn) return;

    const taskEl = btn.closest(".task");
    if (!taskEl) return;

    const taskId = taskEl.dataset.taskId;
    if (!taskId) return;

    if (btn.classList.contains("task__button--view")) {
        const task = getTaskById(taskId);
        if (!task) return;
        renderSelectedTask(task);
    }

    // vital
    if (btn.classList.contains("task__button--vital")) {
        const confirmVital = confirm("Get this task as vital?");
        if (!confirmVital) return;

        updateTaskById(taskId, { mode: "vital", status: "in-progress" });
        renderTaskList();
    }

    // edit

    // delete
    if (btn.classList.contains("task__button--delete")) {
        const confirmDelete = confirm("Delete this task?");
        if (!confirmDelete) return;

        deleteTaskById(taskId);
        renderEmptyState();
        renderTaskList();
    }
    // finish
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
}

function renderEmptyState() {
    if (!taskDetails) return;

    taskDetails.innerHTML = `
        <p class="task-details__greetings">Select a task to see details</p>
        <span class="task-details__underline"></span>
    `;
}

