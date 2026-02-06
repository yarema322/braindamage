export function initHamMenu() {
  const hamMenu = document.querySelector(".ham__menu");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  if (!hamMenu || !sidebar || !overlay) {
    return
  };

  hamMenu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    hamMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
}
