document.addEventListener("DOMContentLoaded", function() {
   
    function esPrimo(a){
        
        for(let i = 2; i < a; i++){
            if(a % i == 0){
                return false;
            } 
        }
        return true;
    }



    /* MAIN */
    const num_1 = parseInt(prompt("Introduce un número entero"));
    const num_2 = parseInt(prompt("Introduce otro  número entero"));
    let min, max;
    let lst;

    if(num_1 >= num_2) {
        max = num_1;
        min = num_2;
    }else{
        max = num_2;
        min = num_1;
    }

    for(let i = min; i <= max; i++){
        if(esPrimo(i)){
            lst.push(i);

        }
    }

    alert(lst)

    console.log(lst);

    

})
