import taskTpl from "../../assets/partials/task.hbs";
import { formatTaskDate } from "../common/format-task-date.js";
import { truncate } from "../common/truncate.js";
import { formatPriority } from "../common/format-priority.js";
import { formatStatus } from "../common/format-status.js";
import { renderStatusIcon } from "../common/render-status-icon.js";
import { getTasksFromStorage } from "../common/storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("task-list__container");
  if (!container) return;

  const tasks = getTasksFromStorage();
  container.innerHTML = tasks.map(t => taskTpl(toTemplateModel(t))).join("");  
});

document.addEventListener("click", (e) => {
  const taskEl = e.target.closest(".task[data-task-id]");
  if (!taskEl) return;

  const taskId = taskEl.dataset.taskId;

  document.dispatchEvent(
    new CustomEvent("task:selected", { detail: taskId })
  );
});

function toTemplateModel(task) {
    return {
        id: task.id,
        taskTitle: truncate(task.title, 20),
        taskDescriptionShort: truncate(task.description, 60),

        priority: task.priority,
        priorityLabel: formatPriority(task.priority),

        status: task.status,
        statusLabel: formatStatus(task.status),
        statusIcon: renderStatusIcon(task.status),
        
        createdAtLabel: formatTaskDate(task.createdAt),

        image: task.image || "",
    };
};
