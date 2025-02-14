
document.addEventListener("DOMContentLoaded", function(){

    function capitalizar(texto){

        let salida = "";
        let espacio = false;
        for(let i = 0; i < texto.length; i++){
            if ((espacio == true || i == 0) && texto[i] != " "){
                salida += texto[i].toUpperCase();
                espacio = false;
            }else if(texto[i] == " "){
                espacio = true;
                salida += texto[i];
            }else{
                salida += texto[i];
            }
        }

        return salida;
    }

    // código de prueba
    alert(capitalizar("hola mundo")) // "Hola Mundo"
    alert(capitalizar("make it real")) // "Make It Real"
    alert(capitalizar("make    it    real")) // "Make    It    Real"
});