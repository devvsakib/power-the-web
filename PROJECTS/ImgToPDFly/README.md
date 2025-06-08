# 📄 ImgToPDFly

**ImgToPDFly** is a lightweight and user-friendly web tool designed to help users effortlessly convert images into PDF documents or extract text from images using OCR (Optical Character Recognition). It provides a smooth drag-and-drop experience with support for both batch image processing and multilingual text extraction.

---

## 🔍 Introduction

Converting image files to PDFs or extracting embedded text is a common need for students, professionals, and digital archivists. ImgToPDFly bridges that gap with an intuitive drag-and-drop interface, real-time previews, and dynamic PDF generation—directly in the browser using `jsPDF` and `Tesseract.js`.

Whether you’re assembling a photo-based report or pulling text from scanned documents, ImgToPDFly handles it seamlessly—no server required.

---

## ✨ Features

### ✅ Easy Image Upload
- Drag-and-drop interface or manual file selection.
- Instant thumbnail preview of selected images.
- Batch support for multiple image files.

### 📄 Image to PDF Conversion
- Generate a multi-page PDF from uploaded images.
- Automatic image scaling and centering based on selected page size (e.g., A4, Letter).
- Optional compression and grayscale modes for optimized PDF output.

### 🔠 OCR Text Extraction
- Extract text from images using [Tesseract.js](https://github.com/naptha/tesseract.js).
- Supports multiple languages and preserves formatting if required.
- Generates a clean and readable text-based PDF.

### 🧭 Real-Time Feedback
- Dynamic progress bar during processing.
- Loading modal with status updates and image counters.

### 🧹 File Management
- Remove individual images from the list.
- Clear all uploaded images with a single click.

### 🎨 UX Enhancements
- Tab switching between "Image to PDF" and "Text Extraction" modes.
- Visual cues for file handling and active processes.

---

## 🛠️ Tech Stack

- **JavaScript (Vanilla)**
- **jsPDF** – for generating PDFs in-browser.
- **Tesseract.js** – for OCR-based text recognition.
- **HTML & CSS** – responsive layout with Tailwind/utility-first style.
- **Tailwind CSS** - Uses tailwind css cdn library via CDN.

---

## 🚀 Getting Started

You can run the project by simply opening the `index.html` file in a browser. No backend required.

---
