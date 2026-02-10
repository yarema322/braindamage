import { getTasksFromStorage, saveTasksToStorage } from "../common/storage.js";
import { renderTaskList } from "../common/render-task-list.js";

export function initAddTask() {
  const form = document.getElementById("modal-form");
  if (!form) {return;}

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("add-task-title")?.value?.trim();
    const createdAt = document.getElementById("add-task-date")?.value;
    const priorityInput = form.querySelector('input[name="add-task-priority"]:checked');
    const priority = priorityInput ? priorityInput.value : 'low';
    const description = document.getElementById("add-task-description")?.value?.trim();

    const tasks = getTasksFromStorage();
    const imageInput = document.getElementById("task-image");
    const file = imageInput?.files[0];

    const saveTask = (image) => {
      const task = {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        status: "not-started",
        createdAt,
        image,
        mode: "normal", 
      };

      tasks.push(task);
      saveTasksToStorage(tasks);

      const modal = document.querySelector('[data-modal="add-task"]');
      if (modal) {
        modal.classList.remove("show");
      }

      form.reset();

      renderTaskList("dashboard-task-list__container");

    };

    if (!file) {
      saveTask(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => saveTask(reader.result);
    reader.readAsDataURL(file);
  });
}