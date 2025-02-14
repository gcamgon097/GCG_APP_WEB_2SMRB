// 1. Seleccionar los elementos por clase
const cuadrado = document.querySelector(".caja"); // Selecciona el primer elemento con la clase "cuadrado"
const boton = document.querySelector(".boton"); // Selecciona el primer elemento con la clase "boton"

function alternarCuadrado() {
    // Usamos classList.toggle para alternar la clase "oculto"
    cuadrado.classList.toggle("oculto");

    // Cambiamos el texto del botón según el estado del cuadrado
    if (cuadrado.classList.contains("oculto")) {
        boton.textContent = "Mostrar Cuadrado";
    } else {
        boton.textContent = "Ocultar Cuadrado";
    }
}


boton.addEventListener("click", alternarCuadrado);