/*
Ejercicio 17
Dado un numero, mostrar los numeros de 1 hasta el numero. Para multiplos de tres, escribir "denu" en lugar del numero, para los multiplos de cinco, "lemon", y si es multiplo de tres y cinco, "denolemon"

Input: 6
Output: 1 2 denu 4 lemon denu
*/

function multiplos(num){
    let numbers = " ";

    for (let i = 1; i <= num; i++){
        if(i%3==0){
           (i%5==0) ? numbers += `denolemon ` : numbers += `denu `;   
        }else if(i%5==0){
            numbers += `lemon `;
        }else{
            numbers += `${i} `;
        }
    }

    return numbers;
}