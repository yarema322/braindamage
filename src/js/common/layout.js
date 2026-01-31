async function loadPartial(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  
  if (!document.getElementById(id)) return;
  document.getElementById(id).innerHTML = html;

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
}