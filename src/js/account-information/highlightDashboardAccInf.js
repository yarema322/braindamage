document.addEventListener("DOMContentLoaded", () => {
        const settingsItem = document.querySelector(".sidebar__item--settings");
        if (
          window.location.pathname.endsWith("account-information.html") &&
          settingsItem
        ) {
          settingsItem.classList.add("sidebar__item--selected");
        }
      });