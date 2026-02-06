export function showFileNames(files) {
  const container = document.getElementById("drop-zone");
  if (!container) {return;}

  const svgElements = container.querySelectorAll("svg");
  const uploadText = container.querySelector(".upload-text");

  const existingPreviews = container.querySelectorAll(".preview-img");
  existingPreviews.forEach((img) => img.remove());

  if (files.length === 0) {
    svgElements.forEach((svg) => (svg.style.display = "block"));
    if (uploadText) {uploadText.style.display = "inline";}
    return;
  }

  svgElements.forEach((svg) => (svg.style.display = "none"));
  if (uploadText) {uploadText.style.display = "none";}

  Array.from(files).forEach((file) => {
    if (!file.type.startsWith("image/")) {return;}

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
}

export function initFileUpload(dropZoneSelector, inputSelector) {
  const dropZone = document.querySelector(dropZoneSelector);
  const fileInput = document.querySelector(inputSelector);

  if (!dropZone || !fileInput) {return;}

  fileInput.addEventListener("change", (e) => {
    showFileNames(e.target.files);
  });

  dropZone.addEventListener("click", (e) => {
    if (e.target.tagName !== "INPUT") {
      fileInput.click();
    }
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.backgroundColor = "#f5f5f5";
  });

  dropZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropZone.style.backgroundColor = "";
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.backgroundColor = "";
    const files = e.dataTransfer.files;
    fileInput.files = files;
    showFileNames(files);
  });
}
