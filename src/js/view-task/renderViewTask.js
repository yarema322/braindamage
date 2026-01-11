import { formatTaskDate } from "../common/formatTaskDate.js";
import { deleteTaskById } from "../common/deleteTaskById.js";

// id from URL
export function getTaskIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// get task by id
export function getTaskById(id) {
    const data = localStorage.getItem("tasks");
    const tasks = data ? JSON.parse(data) : [];
    return tasks.find(task => task.id === id);
}

// process of rendering
document.addEventListener("DOMContentLoaded", () => {
    const taskId = getTaskIdFromUrl();
    if (!taskId) return;

    const task = getTaskById(taskId);

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

// format priority
function formatPriority(priority) {
    const map = {
        extreme: "Extreme",
        moderate: "Moderate",
        low: "Low",
    };
    return map[priority] || priority;
}

// format status
function formatStatus(status) {
  const map = {
    "not-started": "Not Started",
    "in-progress": "In Progress",
    "low": "Low",
  };
  return map[status] || status;
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
