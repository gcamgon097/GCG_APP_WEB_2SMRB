const boton_cambio_hex = document.getElementById("boton"); /* Esto sirve para cambiar el color */
const texto_color_hex = document.querySelector(".color"); /* Selecciona el texto descriptivo del color */

function generar_color_hex() {  /* Esta función genera los 20 colores de forma aleatoria en formato hexadecimal*/
    const caracteres = "0123456789ABCDEF";  /* Establezco los carácteres hexadecimales*/
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += caracteres[Math.floor(Math.random() * 16)]; 
    }
    return color; /* Me devuelve el valor "color" */
}

boton_cambio_hex.addEventListener("click", () => {  /* Con esto permito que al hacer click se genere un nuevo color */
    const nuevo_color = generar_color_hex();
    document.body.style.backgroundColor = nuevo_color;
    texto_color_hex.textContent = nuevo_color;
});