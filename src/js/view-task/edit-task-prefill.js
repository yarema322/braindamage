import { getTaskById } from "../common/storage.js";

export function initEditTaskPrefill() {
  document.addEventListener("click", (e) => {
    const editBtn = e.target.closest('[data-open="task-edit-modal"][data-task-id]');
    if (!editBtn) {return;}

    const taskId = editBtn.dataset.taskId;
    const task = getTaskById(taskId);
    if (!task) {return;}

    const form = document.querySelector(".view-task-edit-modal__form");
    if (!form) {return;}


    form.dataset.editingTaskId = taskId;
    form.title.value = task.title || "";
    form.date.value = task.createdAt || ""; 
    form.description.value = task.description || "";
    
    if (form.priority) {
      form.priority.value = task.priority || "low";
    }
  });
}