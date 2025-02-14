document.addEventListener("DOMContentLoaded", function(){

    function removerCeros(array){

        let array_n = [];
        for(let i = 0; i<array.length; i++){
            if(array[i] !== 0){
                array_n.push(array[i]);
            }
        }

        return array_n;
    }

    alert(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
    alert(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
    alert(removerCeros([0, 0, 0])) // []

});