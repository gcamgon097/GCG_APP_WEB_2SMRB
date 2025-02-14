document.addEventListener("DOMContentLoaded", function() {

    function numeroDeCaracteres (num){
    
        let num_car_str = 0;
        for (let i = 0; i < num_car_str; i++) {
            if (string[i] == caracter) {
                num_car_str++;
            }
        }
        return num_car_str;
    }


    // código de prueba //
    alert(numeroDeCaracteres("Hola Mundo", "o")) // 2
    alert(numeroDeCaracteres("MMMMM", "m")) // 0
    alert(numeroDeCaracteres("eeee", e)) // 4



});
