document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tasks-container");
  if (!container) return;

  const storedTasks = localStorage.getItem("tasks");
  const tasks = storedTasks ? JSON.parse(storedTasks) : [];

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    container.appendChild(taskElement);
  });
});

function truncateByChars(text, maxChars) {
  if (!text) return "";
  return text.length > maxChars
    ? text.slice(0, maxChars).trim() + "…"
    : text;
}

function createTaskElement(task) {
  const taskElement = document.createElement("div");
  const priorityMap = {
    extreme: "Extreme",
    moderate: "Moderate",
    low: "Low",
  };
  const priorityText = priorityMap[task.priority] || "";
  
  const title = truncateByChars(task.title, 40);
  const description = truncateByChars(task.description, 120);

  taskElement.className = "content__load";
  taskElement.dataset.taskId = task.id;
  
  taskElement.innerHTML = `
  <div class="load__circle">
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7.67126C1 9.26256 1.63214 10.7887 2.75736 11.9139C3.88258 13.0391 5.4087 13.6713 7 13.6713C8.5913 13.6713 10.1174 13.0391 11.2426 11.9139C12.3679 10.7887 13 9.26256 13 7.67126C13 6.07997 12.3679 4.55384 11.2426 3.42862C10.1174 2.30341 8.5913 1.67126 7 1.67126C5.4087 1.67126 3.88258 2.30341 2.75736 3.42862C1.63214 4.55384 1 6.07997 1 7.67126Z" stroke="#F21E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      </path>
    </svg>
  </div>

  <div class="load__describe">
    <div class="describe__heading">
      <p>${title}</p>
    </div>

    <div class="describe__information">
      <p>${description || ""}</p>
      ${task.image ? `<img class="task__image" src="${task.image}" alt="task image" />` : ""}
    </div>

    <div class="describe__footer">
      <p class="footer__priority">
        Priority: <span class="${task.priority}">${priorityText}</span>
      </p>

      <p class="footer__status">
        Status:
        <span class="footer__status--progress">In Progress</span>
      </p>

      <p class="footer__create-date">
        Created on: ${task.createdAt}
      </p>
    </div>
  </div>
`;

  return taskElement;
}
