document.addEventListener("click", (e) => {
    const toggleButton = e.target.closest(".task__button--more-options");
    const menuContainer = e.target.closest(".task__actions");

    if (toggleButton) {
        const wrapper = toggleButton.closest(".task__more-options");
        const currentMenu = wrapper.querySelector(".task__actions");

        document.querySelectorAll(".task__actions.show").forEach((menu) => {
            if (menu !== currentMenu) {
                menu.classList.remove("show");
            }
        });

        currentMenu.classList.toggle("show");
        return;
    }

    if (menuContainer) {
        menuContainer.classList.remove("show");
        return;
    }

    document.querySelectorAll(".task__actions.show").forEach((menu) => {
        menu.classList.remove("show");
    });
});