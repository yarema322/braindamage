document.addEventListener("click", (e) => {
  const editBtn = e.target.closest(".task-details__button--edit");
  if (!editBtn) return;

  const detailsItem = editBtn.closest(".task-details__item");
  if (!detailsItem) {
    return;
  }

  const taskId = detailsItem.dataset.taskId;
  if (!taskId) {
    return;
  }

  window.location.href = `view-task.html?id=${taskId}`;
});

