/*
Dado un String, darle la vuelta, invertir el orden de sus caracteres. No se pueden usar metodos del lenguaje, solo estructuras de control.
Input: "hola" Output: aloh
*/

function reverseString(string){
    let stringSplit = string.split('');
    let newArr = [];
    let arrayToString = "";

    for(let i=(stringSplit.length -1) ; i>=0 ; i-- ){
        newArr.push(stringSplit[i]);
        arrayToString = newArr.join().replace(/,/g, "");
    }

    return arrayToString;
}