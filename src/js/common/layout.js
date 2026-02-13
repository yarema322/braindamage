async function loadPartial(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  
  if (!document.getElementById(id)) {return;}

  const element = document.getElementById(id);
  if (!element || element.innerHTML.trim()) {return;}
  element.innerHTML = html;

  if (id === "header") {
    const m = await import("./date-full.js");
    m.dateFull();
  }
}

export async function loadLayout() {
  await loadPartial("header", "partials/header.html");
  await loadPartial("sidebar", "partials/sidebar.html");
  await loadPartial("modal-container__add-task", "partials/modal-add-task.html");
  await loadPartial("modal-container__invite", "partials/modal-invite-members.html");
  await loadPartial("modal-container__task-edit", "partials/modal-edit-task.html");
}