import { formatTaskDate } from "../common/format-task-date.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("task-list__container");
  if (!container) return;

  const tasks = getTasksFromStorage();
  container.innerHTML = "";

  tasks.forEach(task => {
    const taskElement = renderTask(task);
    container.appendChild(taskElement);
  });
});

// storage 
function getTasksFromStorage() {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
}

// render task
const taskTemplate = document.getElementById("task-template");

function renderTask(task) {
  const fragment = taskTemplate.content.cloneNode(true);

  const taskEl = fragment.querySelector(".task");
  taskEl.dataset.taskId = task.id;

  const circle = fragment.querySelector(".task__circle");
  circle.innerHTML = renderStatusIcon(task.status);

  fragment.querySelector(".task__title").textContent = truncate(task.title, 20);

  fragment.querySelector(".task__description").textContent = truncate(task.description, 60);

  fragment.querySelector(".task__priority").innerHTML = `
    Priority:
    <span class="task__priority--${task.priority}">
      ${formatPriority(task.priority)}
    </span>
  `;

  fragment.querySelector(".task__status").innerHTML = `
    Status:
    <span class="task__status--${task.status}">
      ${formatStatus(task.status)}
    </span>
  `;

  fragment.querySelector(".task__date").textContent = `Created on: ${formatTaskDate(task.createdAt)}`;

  const img = fragment.querySelector(".task__image");

  if (task.image) {
    img.src = task.image;
    img.alt = "task image";
  } else {
    img.remove();
  }

  return fragment;
}

// helpers
function truncate(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text;
}

function formatPriority(priority) {
  const map = {
    extreme: "Extreme",
    moderate: "Moderate",
    low: "Low",
  };
  return map[priority] || priority;
}

function formatStatus(status) {
  const map = {
    "not-started": "Not Started",
    "in-progress": "In Progress",
    "low": "Low",
  };
  return map[status] || status;
}

// icon
function renderStatusIcon(status) {
  const colorMap = {
    "not-started": "#F21E1E",
    "in-progress": "#1a30f5",
    "low": "#1eff00ff",
  };

  return `
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
      <circle
        cx="7"
        cy="7.5"
        r="6"
        stroke="${colorMap[status] || "#ccc"}"
        stroke-width="2"
      />
    </svg>
  `;
}

// delete task event
document.addEventListener("task:deleted", () => {
  const container = document.getElementById("task-list__container");
  if (!container) return;

  container.innerHTML = "";

  const tasks = getTasksFromStorage();
  tasks.forEach(task => {
    const taskElement = renderTask(task);
    container.appendChild(taskElement);
  });
});
