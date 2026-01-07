import { renderViewTask } from "./renderViewTask.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".view-task-edit-modal__form");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const taskId = params.get("id");
  if (!taskId) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = form.title.value.trim();
    const date = form.date.value;
    const priority = form.priority.value;
    const description = form.description.value.trim();

    const imageInput = document.getElementById("task-image");
    const file = imageInput?.files[0];

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.findIndex(task => task.id === taskId);
    if (index === -1) return;

    // если файл не выбран — обновляем без картинки
    if (!file) {
      tasks[index] = {
        ...tasks[index],
        title,
        date,
        priority,
        description
      };

      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderViewTask(tasks[index]);

      return;
    }

    // если файл выбран — читаем и обновляем картинку
    const reader = new FileReader();

    reader.onload = () => {
      tasks[index] = {
        ...tasks[index],
        title,
        date,
        priority,
        description,
        image: reader.result
      };

      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderViewTask(tasks[index]);

      document
        .querySelector('[data-modal="task-edit-modal"]')
        .classList.remove("show");
    };

    reader.readAsDataURL(file);
  });
});
