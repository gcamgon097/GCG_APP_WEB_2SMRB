document.addEventListener("DOMContentLoaded", function() {

    /*Definimos la funcion */
    function contrasenaValida (string){

        if(string == "2FjjjbFsuj" || string == "eoZiugBf&g9"){
            return true;
        }

        return false;

    }
/*          */
console.log(contrasenaValida("2Fj(jjbFsuj"))
console.log(contrasenaValida("eoZiugBf&g9")) 
console.log(contrasenaValida("hola")) 
console.log(contrasenaValuda("")) 



});
