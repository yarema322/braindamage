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

function renderTask(task) {
  const taskEl = document.createElement("div");
  taskEl.className = "task";
  taskEl.dataset.taskId = task.id;

  taskEl.innerHTML = `
    <div class="task__circle">
      ${renderStatusIcon(task.status)}
    </div>

    <div class="task__body">
      <header class="task__header">
        <h2 class="task__title">${truncate(task.title, 20)}</h2>
      </header>

      <div class="task__content">
        <p class="task__description">
          ${truncate(task.description, 60)}
        </p>

        ${
          task.image
            ? `<img src="${task.image}" alt="task-image" class="task__image">`
            : ""
        }
      </div>

      <footer class="task__footer">
        <p class="task__priority">
          Priority:
          <span class="task__priority--${task.priority}">
            ${formatPriority(task.priority)}
          </span>
        </p>

        <p class="task__status">
          Status:
          <span class="task__status--${task.status}">
            ${formatStatus(task.status)}
          </span>
        </p>

        <p class="task__date">
          Created on: ${task.createdAt}
        </p>
      </footer>
    </div>
  `;

  return taskEl;
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
