document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("modal-form");
  const modal = document.querySelector('[data-modal="add-task"]');

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();    

    const priority = form.elements["task-priority"].value;

    modal.classList.remove("show"); 
    form.reset();
  });
});
