// Espera a que todo el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionamos todas las imágenes con la clase 'flor'
    const flores = document.querySelectorAll(".flor");

    // Configuración del Intersection Observer
    const opciones = {
        root: null, // usa la pantalla (viewport)
        rootMargin: "0px",
        threshold: 0.2 // Se activa cuando el 20% de la imagen es visible
    };

    // Función que detecta cuando un elemento es visible
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Agrega la clase CSS para mostrarla
                observer.unobserve(entry.target); // Opcional: deja de observarlo para que no se repita
            }
        });
    }, opciones);

    // Le decimos al observer que vigile cada flor
    flores.forEach(flor => {
        observer.observe(flor);
    });
});