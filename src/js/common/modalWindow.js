const openButtons = document.querySelectorAll("[data-open]");

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalName = button.dataset.open; 
    const modal = document.querySelector(`[data-modal="${modalName}"]`);
    modal.classList.add("show");

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });
});

const closeButtons = document.querySelectorAll("[data-close]");

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalName = button.dataset.close;
    const modal = document.querySelector(`[data-modal="${modalName}"]`);
    modal.classList.remove("show");
  });
});
