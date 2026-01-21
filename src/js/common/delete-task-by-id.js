export function deleteTaskById(taskId) {
  if (!taskId) return;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter(task => String(task.id) !== String(taskId));


  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  document.dispatchEvent(
    new CustomEvent("task:deleted", { detail: taskId })
  );
}
