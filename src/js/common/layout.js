async function loadPartial(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  if (id === "header") {
    import("./dateFull.js").then(m => m.dateFull());
  }
}

export async function loadLayout() {
  loadPartial("header", "partials/header.html");
  loadPartial("sidebar", "partials/sidebar.html");
}