export function initClickOutside(sidebarSelector, hamMenuSelector, overlaySelector) {
  const sidebar = document.querySelector(sidebarSelector);
  const hamMenu = document.querySelector(hamMenuSelector);
  const overlay = document.querySelector(overlaySelector);

  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !hamMenu.contains(e.target)
    ) {
      sidebar.classList.remove("active");
      hamMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
}
