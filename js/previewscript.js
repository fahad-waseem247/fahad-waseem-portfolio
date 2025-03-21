// Optional PDF.js Script (Uncomment if you want to use PDF.js for preview)
document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = '/assets/Fahad Waseem CV.pdf'; // Path to your PDF file

    const canvas = document.getElementById('pdf-canvas');
    const ctx = canvas.getContext('2d');

    // Load and render the PDF file using PDF.js
    pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
        pdf.getPage(1).then(function (page) {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            // Set canvas size based on PDF page
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into the canvas
            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            page.render(renderContext);
        });
    });
});
