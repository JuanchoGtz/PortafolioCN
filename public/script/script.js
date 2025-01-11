document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio cargado correctamente");
});
//Funcion de la flecha
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
// Función para mostrar los elementos con un retraso
function showHeroContent() {
    const title = document.getElementById('hero-title');
    const paragraph = document.getElementById('hero-paragraph');
    const arrow = document.getElementById('hero-arrow');

    // Muestra el título después de 1 segundo
    setTimeout(() => {
        title.classList.remove('hidden');
        title.classList.add('visible');
    }, 1000);

    // Muestra el párrafo después de 2 segundos
    setTimeout(() => {
        paragraph.classList.remove('hidden');
        paragraph.classList.add('visible');
    }, 2000);

    // Muestra la flecha después de 3 segundos
    setTimeout(() => {
        arrow.classList.remove('hidden');
        arrow.classList.add('visible');
    }, 3000);
}

// Ejecuta la función cuando la página haya cargado
window.onload = showHeroContent;
