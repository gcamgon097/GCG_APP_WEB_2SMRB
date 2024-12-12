// Datos de servicios con imágenes y descripciones
const servicios = [
    {
        id: 1,
        nombre: "Reparación de Teléfono",
        precio: 300,
        descripcion: "Soluciones rápidas para pantallas, baterías y más.",
        imagen: "img/servicio-telefono.jpg"
    },
    {
        id: 2,
        nombre: "Reparación de Computadora",
        precio: 500,
        descripcion: "Diagnóstico y reparación para PC y laptops.",
        imagen: "img/servicio-computadora.jpg"
    },
    {
        id: 3,
        nombre: "Mantenimiento Preventivo",
        precio: 150,
        descripcion: "Limpieza y optimización para prevenir fallos.",
        imagen: "img/servicio-mantenimiento.jpg"
    },
    {
        id: 4,
        nombre: "Reparación de Tablets",
        precio: 200,
        descripcion: "Pantallas y componentes reemplazados con calidad.",
        imagen: "img/servicio-tablet.jpg"
    },
    {
        id: 5,
        nombre: "Reparación de Consolas",
        precio: 400,
        descripcion: "Reparaciones rápidas y seguras para tus consolas favoritas.",
        imagen: "img/servicio-consolas.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.getElementById("carrusel");
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");

    // Generar las tarjetas en el carrusel
    servicios.forEach(servicio => {
        const card = document.createElement("div");
        card.classList.add("servicio-card");

        card.innerHTML = `
            <img src="${servicio.imagen}" alt="${servicio.nombre}">
            <div class="card-content">
                <h3>${servicio.nombre}</h3>
                <p>${servicio.descripcion}</p>
                <p><strong>Precio: $${servicio.precio}</strong></p>
                <a href="#" class="btn-agregar" data-id="${servicio.id}">Agregar al Carrito</a>
            </div>
        `;

        carrusel.appendChild(card);
    });

    // Carrusel: lógica para desplazamiento
    let currentPosition = 0;
    const cardWidth = document.querySelector(".servicio-card").offsetWidth + 20; // Ancho de la tarjeta + gap
    const maxPosition = -(carrusel.scrollWidth - carrusel.clientWidth);

    btnLeft.addEventListener("click", () => {
        currentPosition = Math.min(currentPosition + cardWidth, 0);
        carrusel.style.transform = `translateX(${currentPosition}px)`;
    });

    btnRight.addEventListener("click", () => {
        currentPosition = Math.max(currentPosition - cardWidth, maxPosition);
        carrusel.style.transform = `translateX(${currentPosition}px)`;
    });
});
