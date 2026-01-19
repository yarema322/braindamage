const dropdowns = document.querySelectorAll(".member-manage__trigger[data-roles-open]");

dropdowns.forEach(dropdown => {
  dropdown.addEventListener("click", () => {
    dropdown.dataset.rolesOpen =
      dropdown.dataset.rolesOpen === "false" ? "true" : "false";
  });
});

document.addEventListener("click", (event) => {
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.dataset.rolesOpen = "false";
    }
  });
});
