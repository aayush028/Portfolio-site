function downloadPDF() {
    const pdfUrl = 'icon/Aayushjain.pdf';
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.click();
}
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', downloadPDF);
