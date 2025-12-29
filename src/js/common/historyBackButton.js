document.addEventListener('click', (e) => {
  const backBtn = e.target.closest('[data-action="history-back"]');
  if (!backBtn) return;

  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/index.html';
  }
});
