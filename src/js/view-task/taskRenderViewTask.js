// id from URL
function getTaskIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// get task from LocalStorage
function getTasksFromStorage() {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
}

// get task by id
function getTaskById(id) {
    const tasks = getTasksFromStorage();
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

function renderViewTask(task) {
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
    fragment.querySelector(".view-task__title").textContent = truncate(task.title, 220);
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
    fragment.querySelector(".view-task__date").textContent =
        `Created on: ${task.createdAt}`;
    
    // task description
    fragment.querySelector(".view-task__description").textContent = truncate(task.description, 2898);

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

// truncate text
  function truncate(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text;
}