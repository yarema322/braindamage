import { formatTaskDate } from "../common/format-task-date.js";
import { deleteTaskById } from "../common/delete-task-by-id.js";

let taskDetails;
let selectedTaskId = null; // id task
const taskTemplate = document.getElementById("task-details-template"); // template

// DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  taskDetails = document.querySelector(".task-details");
  renderEmptyState();
});

// render when no task 
function renderEmptyState() {
  taskDetails.innerHTML = `
    <p class="task-details__greetings">Select a task to see details</p>
    <span class="task-details__underline"></span>
  `;
}

// select task
document.addEventListener("click", (e) => {
  const taskEl = e.target.closest("[data-task-id]");
  if (!taskEl) return;

  // get task id
  selectedTaskId = taskEl.dataset.taskId; 

  // get tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find(t => t.id === selectedTaskId);

  // condition statement
  if (task) {
    renderTaskDetails(task);
  } else {
    renderEmptyState();
  }
});

// render task details
function renderTaskDetails(task) { 
  taskDetails.innerHTML = "";

  // clone template
  const taskDetailsNode = taskTemplate.content.cloneNode(true);

  // ID binding
  const detailsItem = taskDetailsNode.querySelector(".task-details__item");
  detailsItem.dataset.taskId = task.id;

  // task info title, desc, date
  const titleEl = taskDetailsNode.querySelector(".task-details__title");
  const descEl = taskDetailsNode.querySelector(".task-details__description");
  const dateEl = taskDetailsNode.querySelector(".task-details__date");

  

  // bind data
  titleEl.textContent = task.title;
  descEl.textContent = task.description;
  // task date
  dateEl.textContent = `Created on: ${formatTaskDate(task.createdAt)}`;

  // task priority
  const priorityEl = taskDetailsNode.querySelector(".task-details__priority");

  if (task.priority) {
    priorityEl.innerHTML = `
      Priority: <span class="task__priority--${task.priority}">
        ${formatPriority(task.priority)}
      </span>
    `;
  } else {
    priorityEl.remove();
  }

  // task status
  const statusEl = taskDetailsNode.querySelector(".task-details__status");

  if (task.status) {
    statusEl.innerHTML = `
      Status:
      <span class="task__status--${task.status}">
        ${formatStatus(task.status)}
      </span>
    `;
  } else {
    statusEl.remove();
  }

  // task image
  const imgEl = taskDetailsNode.querySelector(".task-details__image");

  if (task.image) {
    imgEl.src = task.image;
    imgEl.alt = "task-image";
  } else {
    imgEl.remove();
  }

  taskDetails.append(taskDetailsNode);
}

// truncate
  function truncate(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text;
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
  const deleteBtn = e.target.closest("[data-delete-button]");
  if (!deleteBtn) return;

  if (!selectedTaskId) return;
  
  const confirmed = confirm("Delete this task?");
  if (!confirmed) return;

  deleteTaskById(selectedTaskId);
  selectedTaskId = null;
  renderEmptyState();
});
