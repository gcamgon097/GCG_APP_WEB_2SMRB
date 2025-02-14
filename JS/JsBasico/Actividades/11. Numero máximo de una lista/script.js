document.addEventListener("DOMContentLoaded", function() {

    /* Definición de funciones */
    function findLargestNumber(números) {
        let a = números[0];

        for (let i = 0; i < números.length; i++) {
            if (números[i] > a) {
                a = números[i];
            }
        }

        return a;
    }

    /* Parte principal -- Llamada a la funcion*/
   
        const num_ele_usr = parseInt(prompt("Ingresa la cantidad de números:"));
        let lst_num = [];

        for (let i = 0; i < num_ele_usr; i++) {
            const num = parseInt(prompt(`Ingresa el número ${i + 1}:`));
            lst_num.push(num);
        }
        /*Comparacion de los numero ingresados en la lista  con la funcion*/
        const maximo = findLargestNumber(lst_num);
        console.log("El número más grande es:" + maximo);
        alert("El número más grande es :" + maximo);
    }

);
