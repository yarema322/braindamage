export function deleteTaskById(taskId) {
  if (!taskId) return;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter(task => task.id !== taskId);

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  document.dispatchEvent(
    new CustomEvent("task:deleted", { detail: taskId })
  );
}
