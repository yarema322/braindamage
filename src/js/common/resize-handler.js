export function initResizeHandler(sidebarSelector, hamMenuSelector, overlaySelector, throttleFn) {
  const sidebar = document.querySelector(sidebarSelector);
  const hamMenu = document.querySelector(hamMenuSelector);
  const overlay = document.querySelector(overlaySelector);

  if (!sidebar || !hamMenu || !overlay) {
    console.warn("initResizeHandler: элемент не найден", { sidebar, hamMenu, overlay });
    return;
  }

  window.addEventListener(
    "resize",
    throttleFn(() => {
      console.count("Window resized", window.innerWidth);
      if (window.innerWidth > 768) {
        sidebar.classList.remove("active");
        hamMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    }, 300)
  );
}
