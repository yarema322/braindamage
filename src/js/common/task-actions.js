document.addEventListener("click", (e) => {
    const toggleButton = e.target.closest(".task__button--more-options");
    const menuContainer = e.target.closest(".task__actions");

    if (toggleButton) {
        const wrapper = toggleButton.closest(".task__more-options");
        const currentMenu = wrapper.querySelector(".task__actions");

        if (currentMenu.classList.contains("show")) {
            currentMenu.classList.remove("show");
            return;
        }

        document.querySelectorAll(".task__actions.show").forEach((menu) => {
            menu.classList.remove("show");
        });

        const offset = 4; 
        
        const rect = toggleButton.getBoundingClientRect();
        
        let left = rect.right + offset; 
        let top = rect.top;

        currentMenu.style.margin = "0"; 

        const menuWidth = 130; 
        const menuHeight = 200;

        if (left + menuWidth > window.innerWidth) { 
            left = rect.left - menuWidth - offset; 
        }

        if (top + menuHeight > window.innerHeight) {
            top = rect.bottom - menuHeight;
        }

        currentMenu.style.left = `${left}px`;
        currentMenu.style.top = `${top}px`;
        
        currentMenu.classList.add("show");
        return;
    }

    if (!menuContainer) {
        document.querySelectorAll(".task__actions.show").forEach((menu) => {
            menu.classList.remove("show");
        });
    }
});

window.addEventListener("scroll", () => {
    document.querySelectorAll(".task__actions.show").forEach((menu) => {
        menu.classList.remove("show");
    });
}, { capture: true });