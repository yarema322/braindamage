document.addEventListener("DOMContentLoaded", () => {
        const settingsItem = document.querySelector(".sidebar__item--settings");
        if (
          window.location.pathname.endsWith("change-password.html") &&
          settingsItem
        ) {
          settingsItem.classList.add("sidebar__item--selected");
        }
      });