document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("modal-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // data from the form
    const title = document.getElementById("task-title").value.trim();
    const createdAt = document.getElementById("task-create-date").value;
    const priority = form.elements["task-priority"].value;
    const description = document.getElementById("task-description").value.trim();
  
    // localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // save picture
    const imageInput = document.getElementById("task-image");
    const file = imageInput.files[0];

    // save task
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
      localStorage.setItem("tasks", JSON.stringify(tasks));

      form.reset();
    };

    // no picture
    if (!file) {
      saveTask(null);
      return;
    }

    // picture
    const reader = new FileReader();

    reader.onload = () => {
      const imageBase64 = reader.result;
      saveTask(imageBase64);
    };

    reader.readAsDataURL(file);
  });
});
