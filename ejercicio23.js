/*
Dado un String poner en mayuscula la primera letra de cada palabra en la cadena y devolverla.

Input: "hola soy denu lemon"
Output: Hola Soy Denu Lemon
*/

function capitalLett(phrase){
    let arrPhrase = phrase.split(' ');
    
    for(let i = 0; i < arrPhrase.length; i++){
      arrPhrase[i] = arrPhrase[i].charAt(0).toUpperCase() + arrPhrase[i].slice(1);
    }
  
    phrase = arrPhrase.join().replace(/,/g, " ");
  
  
    return phrase;
}