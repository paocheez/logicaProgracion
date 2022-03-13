/*
Dado un numero mostrar una lista de los cuadrados de todos los numeros naturales hasta llegar al mismo.

Input: 5 
Output: [ 0, 1, 4, 9, 16 ]
*/
function cuadrados(num){
    let result = [];

    for(let i=0; i<num; i++){
       let temp = i*i;
       result.push(temp);
    }

    return result;
}