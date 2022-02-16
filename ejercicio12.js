/*
Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones y cada numero debe empezar por "n"

Input: 100 
Output:
-n 100
-n 92
-n 84
etc..
*/

function eights(number){
    let list = "";

    for(let i = number; i >= 0; i -= 8){
        list += `-n ${i}\n`;
    }
    return list;
}