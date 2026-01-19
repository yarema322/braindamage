import { formatTaskDate } from "../common/format-task-date.js";
import { truncate } from "../common/truncate.js";
import { formatPriority } from "../common/format-priority.js";
import { formatStatus } from "../common/format-status.js";
import { renderStatusIcon } from "../common/render-status-icon.js";

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
