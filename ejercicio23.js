/*
Dado un String poner en mayuscula la primera letra de cada palabra en la cadena y devolverla.

Input: "hola soy denu lemon"
Output: Hola Soy Denu Lemon
*/

function capitalLett(phrase){
    let arrPhrase = phrase.split('');
    let index = [];
    let idx = arrPhrase.indexOf(" ");

    while (idx != -1) {
        index.push(idx);
        idx = arrPhrase.indexOf(" ", idx + 1);
    }
    return index;
}