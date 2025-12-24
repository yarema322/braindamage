let taskDetails;
let selectedTaskId = null;
const taskTemplate = document.getElementById("task-details-template");

document.addEventListener("DOMContentLoaded", () => {
  taskDetails = document.querySelector(".task-details");
  renderEmptyState();
});

function renderEmptyState() {
  taskDetails.innerHTML = `
    <p class="task-details__greetings">Select a task to see details</p>
    <span class="task-details__underline"></span>
  `;
}

document.addEventListener("click", (e) => {
  const taskEl = e.target.closest("[data-task-id]");
  if (!taskEl) return;

  selectedTaskId = taskEl.dataset.taskId;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find(t => t.id === selectedTaskId);

  if (task) {
    renderTaskDetails(task);
  } else {
    renderEmptyState();
  }
});

function renderTaskDetails(task) { 
  taskDetails.innerHTML = "";

  const taskDetailsNode = taskTemplate.content.cloneNode(true);

  const titleEl = taskDetailsNode.querySelector(".task-details__title");
  const descEl = taskDetailsNode.querySelector(".task-details__description");
  const dateEl = taskDetailsNode.querySelector(".task-details__date");

  titleEl.textContent = truncate(task.title, 60);
  descEl.textContent = truncate(task.description, 1670);
  dateEl.textContent = `Created on: ${task.createdAt}`;

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

  const imgEl = taskDetailsNode.querySelector(".task-details__image");

  if (task.image) {
    imgEl.src = task.image;
    imgEl.alt = "task-image";
  } else {
    imgEl.remove();
  }

  taskDetails.append(taskDetailsNode);
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

