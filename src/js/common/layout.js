async function loadPartial(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  if (id === "header") {
    const m = await import("./date-full.js");
    m.dateFull();
  }
}

export async function loadLayout() {
  await loadPartial("header", "partials/header.html");
  await loadPartial("sidebar", "partials/sidebar.html");
}