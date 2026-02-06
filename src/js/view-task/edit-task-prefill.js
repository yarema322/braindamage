import { getTaskById, getTaskIdFromUrl } from "../common/storage.js";

export function initEditTaskPrefill() {
  const editBtn = document.querySelector('[data-open="task-edit-modal"]');
  if (!editBtn) {return;}

  editBtn.addEventListener("click", () => {
    const taskId = getTaskIdFromUrl();
    if (!taskId) {return;}

    const task = getTaskById(taskId);
    if (!task) {return;}

    document.querySelector("#edit-task-title").value = task.title || "";
    document.querySelector("#edit-task-date").value = task.date || "";
    document.querySelector("#edit-task-description").value =
      task.description || "";

    const priorityInput = document.querySelector(
      `input[name="priority"][value="${task.priority}"]`
    );
    if (priorityInput) {priorityInput.checked = true;}
  });
}
