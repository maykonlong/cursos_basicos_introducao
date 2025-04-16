// Exemplo de funcionalidade JavaScript simples: Hover
document.querySelectorAll('.file-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = "scale(1.05)";
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = "scale(1)";
    });
});
