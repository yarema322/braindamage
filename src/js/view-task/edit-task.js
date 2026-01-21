import { getTaskById, updateTaskById } from "../common/storage";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".view-task-edit-modal__form");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const taskId = params.get("id");
  if (!taskId) return;

  const task = getTaskById(taskId);
  if (!task) return;

  form.title.value = task.title || "";
  form.date.value = task.createdAt || "";
  form.priority.value = task.priority || "";
  form.description.value = task.description || "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const confirmed = confirm ("Save changes?");
    if (!confirmed) return;

    const title = form.title.value.trim();
    const date = form.date.value;
    const priority = form.priority.value;
    const description = form.description.value.trim();
    const imageFile = form.image?.files?.[0];

    if (!title) return;

    if (imageFile) {
      const reader = new FileReader();

      reader.onload = () => {
        update(taskId, {
          title,
          createdAt: date,
          priority,
          description,
          image: reader.result,
        });
      };

      reader.readAsDataURL(imageFile);
    } else {
      update(taskId, {
        title,
        createdAt: date,
        priority,
        description,
      });
    }
  });
});

function update(taskId, patch) {
  const updatedTask = updateTaskById(taskId, patch);
  if (!updatedTask) return;

  window.location.href = `view-task.html?id=${taskId}`;
}