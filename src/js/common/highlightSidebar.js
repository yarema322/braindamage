export function highlightSidebar() {
  const file = window.location.pathname.split("/").pop();

  const routes = {
    "index.html": "dashboard",
    // create vital task 
    "todo.html": "tasks",
    "task-categories.html": "task-categories",
    "account-information.html": "settings",
    // create help

    "change-password.html": "settings",
    "create-categories.html": "task-categories",
    "todo.html": "tasks",
    "view-task.html": "tasks",
  };

  const key = routes[file];
  if (!key) return;

  const item = document.querySelector(`.sidebar__item--${key}`);
  if (item) {
    item.classList.add("sidebar__item--selected");
  }
}
