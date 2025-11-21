// Сделайте функцию глобальной
window.showFileNames = function(files) {
  const container = document.getElementById("drop-zone");
  const svgElements = container.querySelectorAll("svg");
  const uploadText = container.querySelector(".upload-text");

  // Удаляем все превью перед добавлением новых
  const existingPreviews = container.querySelectorAll(".preview-img");
  existingPreviews.forEach((img) => img.remove());

  if (files.length === 0) {
    // Нет файлов — показываем SVG и текст обратно
    svgElements.forEach((svg) => (svg.style.display = "block"));
    if (uploadText) uploadText.style.display = "inline";
    return;
  }

  // Скрываем SVG и текст
  svgElements.forEach((svg) => (svg.style.display = "none"));
  if (uploadText) uploadText.style.display = "none";

  // Для каждого файла создаем миниатюру
  Array.from(files).forEach((file) => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.classList.add("preview-img");
      img.style.maxHeight = "80px";
      img.style.maxWidth = "80px";
      img.style.objectFit = "cover";
      img.style.margin = "5px 2px";
      img.style.borderRadius = "4px";
      container.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
};

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('task-image');
  
  if (dropZone && fileInput) {
    // Обработчик изменения файлов через input
    fileInput.addEventListener('change', function(e) {
      window.showFileNames(e.target.files);
    });

    // Обработчик клика на drop-zone
    dropZone.addEventListener('click', function(e) {
      if (e.target.tagName !== 'INPUT') {
        fileInput.click();
      }
    });

    // Drag & drop функциональность
    dropZone.addEventListener('dragover', function(e) {
      e.preventDefault();
      dropZone.style.backgroundColor = '#f5f5f5';
    });

    dropZone.addEventListener('dragleave', function(e) {
      e.preventDefault();
      dropZone.style.backgroundColor = '';
    });

    dropZone.addEventListener('drop', function(e) {
      e.preventDefault();
      dropZone.style.backgroundColor = '';
      const files = e.dataTransfer.files;
      fileInput.files = files;
      window.showFileNames(files);
    });
  }
});