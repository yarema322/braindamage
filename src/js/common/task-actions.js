document.addEventListener("click", (e) => {
    const button = e.target.closest(".task__button--more-options");
    if (!button) return;

    const wrapper = button.closest(".task__more-options");
    const menu = wrapper.querySelector(".task__actions");

    menu.classList.toggle("show");
});

// close when clicking outside