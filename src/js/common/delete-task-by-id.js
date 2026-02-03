import { getTasksFromStorage, saveTasksToStorage } from "./storage";

export function deleteTaskById(taskId) {
  if (!taskId) return;

  const tasks = getTasksFromStorage();
  const updatedTasks = tasks.filter(task => String(task.id) !== String(taskId));


  saveTasksToStorage(updatedTasks)

  document.dispatchEvent(
    new CustomEvent("task:deleted", { detail: taskId })
  );
}
