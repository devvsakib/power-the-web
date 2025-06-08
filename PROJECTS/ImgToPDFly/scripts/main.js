// Initialize jsPDF
const { jsPDF } = window.jspdf;

// DOM Elements
const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const selectFilesBtn = document.getElementById("selectFilesBtn");
const previewSection = document.getElementById("previewSection");
const imagePreviews = document.getElementById("imagePreviews");
const generateBtn = document.getElementById("generateBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const loadingModal = document.getElementById("loadingModal");
const progressBar = document.getElementById("progressBar");
const imageToPdfTab = document.getElementById("imageToPdfTab");
const textExtractionTab = document.getElementById("textExtractionTab");
const imageToPdfOptions = document.getElementById("imageToPdfOptions");
const textExtractionOptions = document.getElementById("textExtractionOptions");
const loadingTitle = document.getElementById("loadingTitle");
const loadingSubtitle = document.getElementById("loadingSubtitle");
const ocrStatus = document.getElementById("ocrStatus");
const currentImage = document.getElementById("currentImage");
const totalImages = document.getElementById("totalImages");

// State
let files = [];
let currentMode = "imageToPdf"; // 'imageToPdf' or 'textExtraction'

// Event Listeners
selectFilesBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", handleFileSelect);
dropzone.addEventListener("dragover", handleDragOver);
dropzone.addEventListener("dragleave", handleDragLeave);
dropzone.addEventListener("drop", handleDrop);
generateBtn.addEventListener("click", generatePDF);
clearAllBtn.addEventListener("click", clearAllFiles);
imageToPdfTab.addEventListener("click", () => switchMode("imageToPdf"));
textExtractionTab.addEventListener("click", () => switchMode("textExtraction"));

// Functions
function switchMode(mode) {
  currentMode = mode;
  if (mode === "imageToPdf") {
    imageToPdfTab.classList.add("active");
    textExtractionTab.classList.remove("active");
    imageToPdfOptions.classList.remove("hidden");
    textExtractionOptions.classList.add("hidden");
  } else {
    imageToPdfTab.classList.remove("active");
    textExtractionTab.classList.add("active");
    imageToPdfOptions.classList.add("hidden");
    textExtractionOptions.classList.remove("hidden");
  }
}

function handleFileSelect(e) {
  const selectedFiles = Array.from(e.target.files);
  if (selectedFiles.length > 0) {
    files = [...files, ...selectedFiles];
    updatePreview();
  }
}

function handleDragOver(e) {
  e.preventDefault();
  dropzone.classList.add("active");
}

function handleDragLeave() {
  dropzone.classList.remove("active");
}

function handleDrop(e) {
  e.preventDefault();
  dropzone.classList.remove("active");

  const droppedFiles = Array.from(e.dataTransfer.files);
  const imageFiles = droppedFiles.filter((file) =>
    file.type.startsWith("image/")
  );

  if (imageFiles.length > 0) {
    files = [...files, ...imageFiles];
    updatePreview();
  } else {
    alert("Please drop only image files.");
  }
}

function updatePreview() {
  if (files.length === 0) {
    previewSection.classList.add("hidden");
    generateBtn.classList.add("hidden");
    return;
  }

  previewSection.classList.remove("hidden");
  generateBtn.classList.remove("hidden");
  imagePreviews.innerHTML = "";

  files.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const previewContainer = document.createElement("div");
      previewContainer.className = "image-container relative group";

      const img = document.createElement("img");
      img.src = e.target.result;
      img.className =
        "image-preview w-full h-32 object-cover rounded-lg shadow-sm";
      img.alt = file.name;

      const removeBtn = document.createElement("button");
      removeBtn.className =
        "remove-btn absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition";
      removeBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;
      removeBtn.addEventListener("click", () => removeFile(index));

      const fileName = document.createElement("div");
      fileName.className = "text-xs text-gray-500 truncate mt-1";
      fileName.textContent = file.name;

      previewContainer.appendChild(img);
      previewContainer.appendChild(removeBtn);
      previewContainer.appendChild(fileName);
      imagePreviews.appendChild(previewContainer);
    };
    reader.readAsDataURL(file);
  });
}

function removeFile(index) {
  files.splice(index, 1);
  updatePreview();
}

function clearAllFiles() {
  files = [];
  fileInput.value = ""; // Reset the file input value
  updatePreview();
}

async function generatePDF() {
  if (files.length === 0) return;

  // Show loading modal
  loadingModal.classList.remove("hidden");
  progressBar.style.width = "10%";

  if (currentMode === "imageToPdf") {
    await generateImagePDF();
  } else {
    await generateTextPDF();
  }
}

async function generateImagePDF() {
  // Update loading UI
  loadingTitle.textContent = "Generating PDF";
  loadingSubtitle.textContent = "Please wait while we create your document...";
  ocrStatus.classList.add("hidden");

  // Get options
  const compress = document.getElementById("compressOption").checked;
  const grayscale = document.getElementById("grayscaleOption").checked;
  const pageSize = document.getElementById("pageSize").value;

  // Create PDF
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: pageSize,
  });

  // Process each image
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const img = await loadImage(file);

    // Calculate dimensions to fit page
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pageWidth / img.width, pageHeight / img.height);
    const width = img.width * ratio;
    const height = img.height * ratio;
    const x = (pageWidth - width) / 2;
    const y = (pageHeight - height) / 2;

    // Add image to PDF
    pdf.addImage(img, "JPEG", x, y, width, height, null, "FAST");

    // Add new page if not last image
    if (i < files.length - 1) {
      pdf.addPage();
    }

    // Update progress
    const progress = ((i + 1) / files.length) * 90 + 10;
    progressBar.style.width = `${progress}%`;
  }

  // Finalize PDF
  setTimeout(() => {
    progressBar.style.width = "100%";
    setTimeout(() => {
      pdf.save("images.pdf");
      loadingModal.classList.add("hidden");
      progressBar.style.width = "0%";
    }, 300);
  }, 500);
}

async function generateTextPDF() {
  // Update loading UI
  loadingTitle.textContent = "Extracting Text";
  loadingSubtitle.textContent = "Using OCR to recognize text in your images...";
  ocrStatus.classList.remove("hidden");
  totalImages.textContent = files.length;

  // Get options
  const language = document.getElementById("languageSelect").value;
  const preserveFormatting =
    document.getElementById("preserveFormatting").checked;
  const pageSize = "a4"; // Default for text PDF

  // Create PDF
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: pageSize,
  });

  // Set initial font
  pdf.setFont("helvetica");
  pdf.setFontSize(12);

  let extractedText = "";

  // Process each image with OCR
  for (let i = 0; i < files.length; i++) {
    currentImage.textContent = i + 1;

    const file = files[i];
    const img = await loadImage(file);

    // Show progress
    const progress = ((i + 1) / files.length) * 90 + 10;
    progressBar.style.width = `${progress}%`;

    // Perform OCR
    const result = await Tesseract.recognize(img, language, {
      logger: (m) => console.log(m),
    });

    if (preserveFormatting) {
      extractedText += result.data.text + "\n\n";
    } else {
      // Clean up text (remove multiple spaces and newlines)
      const cleanText = result.data.text
        .replace(/\n+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      extractedText += cleanText + " ";
    }
  }

  // Add text to PDF with proper formatting
  const lines = pdf.splitTextToSize(extractedText, 180); // 180mm width
  pdf.text(lines, 15, 20); // 15mm left margin, 20mm top margin

  // Finalize PDF
  setTimeout(() => {
    progressBar.style.width = "100%";
    setTimeout(() => {
      pdf.save("extracted_text.pdf");
      loadingModal.classList.add("hidden");
      progressBar.style.width = "0%";
    }, 300);
  }, 500);
}

function loadImage(file) {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
      img.onload = () => resolve(img);
    };

    reader.readAsDataURL(file);
  });
}
