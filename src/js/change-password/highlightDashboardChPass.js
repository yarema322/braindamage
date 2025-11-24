document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.pathname.endsWith("account-information.html")) return;

  const settingsItem = document.querySelector(".sidebar__item--settings");
  if (settingsItem) {
    settingsItem.classList.add("sidebar__item--selected");
  }
});
