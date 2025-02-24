// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the button by its ID or class (adjust if needed)
  const pdfButton = document.getElementById("pdf-download");

  if (pdfButton) {
    pdfButton.addEventListener("click", function () {
      // Select the element you want to convert (change "content" if needed)
      const element = document.getElementById("content");

      if (element) {
        // Load html2pdf and generate PDF
        html2pdf().from(element).save();
      } else {
        console.error("Content div not found.");
      }
    });
  } else {
    console.error("PDF Download button not found.");
  }
});
