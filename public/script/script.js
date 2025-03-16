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

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const heroArrow = document.getElementById("hero-arrow");
    let lastScrollY = window.scrollY;
    let hideTimeout;

    // Inicialmente oculta el menú
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "transform 0.3s";

    // Función para mostrar el menú
    const showNavbar = () => {
        navbar.style.transform = "translateY(0)";
        clearTimeout(hideTimeout); // Limpia cualquier temporizador previo
        hideTimeout = setTimeout(() => {
            navbar.style.transform = "translateY(-100%)";
        }, 3000); // Oculta después de 3 segundos de inactividad
    };

    // Hacer clic en la flecha despliega el menú
    heroArrow.addEventListener("click", () => {
        showNavbar();
        window.scrollTo({ top: document.getElementById("profile").offsetTop, behavior: "smooth" });
    });

    // Mostrar el menú al desplazarse hacia arriba
    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            // Desplazamiento hacia arriba
            showNavbar();
        }

        lastScrollY = currentScrollY;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let bars = document.querySelectorAll(".fill");
    bars.forEach(bar => {
        let width = bar.style.width;
        bar.style.width = "0"; // Reset para animación
        setTimeout(() => {
            bar.style.width = width; // Aplica el valor real con animación
        }, 200);
    });
});

const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
