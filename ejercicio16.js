ejercicio16.js
/*
Ejercicio 16
Dado una cadena de texto, devolver cuantas vocales tiene la misma.

Input: denu
Output: 2
*/

function numVowels(word){
    let reg = new RegExp(/[aeiou]/,"g");
    let vowels = word.replace(reg, "");
    
    return word.length-vowels.length;
}
