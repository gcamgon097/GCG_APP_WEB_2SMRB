document.addEventListener("DOMContentLoaded", function () {

    /* Definición de la función */
    function SucesionFibonacci(num_ele) {
        let f0 = 0;
        let f1 = 1;
        let lst_fib = [f0, f1]; 

        for (let i = 2; i < num_ele; i++) { 
            let fn = f0 + f1;
            lst_fib.push(fn);

            f0 = f1;
            f1 = fn;
        }

        return lst_fib;
    }

    
    const numElementos = parseInt(prompt("Introduce el número de elementos de la sucesión de Fibonacci:"));
    const lst_fib = SucesionFibonacci(numElementos); 
    console.log(lst_fib); 
    alert("La sucesión de Fibonacci es: " + lst_fib.join(", "));

});

