document.addEventListener("click", (e) => {
  const editBtn = e.target.closest(".task-details__button--edit");
  if (!editBtn) return;

  const detailsItem = editBtn.closest(".task-details__item");
  if (!detailsItem) {
    console.warn("No task-details__item found");
    return;
  }

  const taskId = detailsItem.dataset.taskId;
  if (!taskId) {
    console.warn("No taskId on task-details__item");
    return;
  }

  window.location.href = `view-task.html?id=${taskId}`;
});

