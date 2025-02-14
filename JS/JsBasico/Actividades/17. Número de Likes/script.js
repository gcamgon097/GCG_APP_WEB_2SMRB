document.addEventListener("DOMContentLoaded", function() {

    function likes (num){

        let salida ="";
        if(num < 1000){
            salida += num 
        }else if (num <1000000){
            let= num_smp = (num - num%1000) / 1000;
            salida +=num_smp + "K";

        }else{
            let= num_smp = (num - num%1000000) / 1000000;
            salida += num_smp + "M";
        }
        return salida
    }
    /*Llamamos a la función */
    console.log(likes(983)) // "983"
    console.log(likes(1900)) // "1K"
    console.log(likes(54000)) // "54K"
    console.log(likes(120800)) // "120K"
    console.log(likes(25222444)) // "25M"


    alert(likes(983)) // "983"
    alert(likes(1900)) // "1K"
    alert(likes(54000)) // "54K"
    alert(likes(120800)) // "120K"
    alert(likes(25222444)) // "25M"

});
