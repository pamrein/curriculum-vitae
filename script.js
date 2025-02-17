// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Simulated CV download
function downloadCV() {
    window.open("curriculum-vitae-amrein.pdf", "_blank");
}
