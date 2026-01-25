const STORAGE_KEY = "tasks";

export function getTasksFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error("failed to parse tasks from storage", e);
        return [];
    }
}

export function saveTasksToStorage(tasks) {
    if (!Array.isArray(tasks)) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function getTaskById(id) {
    if (!id) return null;
    const tasks = getTasksFromStorage();
    return tasks.find(t => String(t.id) === String(id)) || null;
}

export function updateTaskById(id, patch) {
    const tasks = getTasksFromStorage();

    const index = tasks.findIndex(t => String(t.id) === String(id));
    if (index === -1) return null;

    tasks[index] = { ...tasks[index], ...patch };
    saveTasksToStorage(tasks);

    return tasks[index];
}

export function getTaskIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}