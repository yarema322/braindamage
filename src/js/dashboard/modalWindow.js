 const open = document.getElementById("add-task");
      const modal__container = document.getElementById(
        "modal-container__add-task"
      );
      const close = document.getElementById("close__add-task");

      open.addEventListener("click", () => {
        modal__container.classList.add("show");
      });

      close.addEventListener("click", () => {
        modal__container.classList.remove("show");
      });

      modal__container.addEventListener("click", (e) => {
        if (e.target === modal__container) {
          modal__container.classList.remove("show");
        }
      });