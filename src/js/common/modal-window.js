// open modal by button
document.addEventListener("click", (e) => {
  // find open button
  const openBtn = e.target.closest("[data-open]");
  if (!openBtn) return;

  // find modal
  const modalName = openBtn.dataset.open;
  const modal = document.querySelector(`[data-modal="${modalName}"]`);
  if (!modal) return;

  // show modal
  modal.classList.add("show");
});


// close modal by button
document.addEventListener("click", (e) => {
  // find close button
  const closeBtn = e.target.closest("[data-close]");
  if (!closeBtn) return;

  // find modal
  const modalName = closeBtn.dataset.close;
  const modal = document.querySelector(`[data-modal="${modalName}"]`);
  if (!modal) return;

  // hide modal
  modal.classList.remove("show");
});


// close modal by clicking outside the modal content
document.addEventListener("click", (e) => {
  // find visible modal
  const modal = e.target.closest(".modal-container.show");
  if (!modal) return;

  // close event
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
