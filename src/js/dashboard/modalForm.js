const form = document.getElementById("modal-form");
      const checkboxes = document.querySelectorAll(
        'input[name="task-priority"]'
      );

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          checkboxes.forEach((cb) => {
            if (cb !== checkbox) cb.checked = false;
          });
        });
      });

      form.addEventListener("submit", (e) => {
        const oneChecked = Array.from(checkboxes).some((cb) => cb.checked);
        if (!oneChecked) {
          e.preventDefault();
          alert("ОБЕРИ БЛЯДЬ ПРІОРИТЕТ!");
        }
      });