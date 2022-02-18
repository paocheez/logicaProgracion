/*
Dada un String y un numero, cortar el string mostrando X cantidad de caracteres dependiendo del numero enviado.

Input: (Denu, 2)
Output: De
*/

function cutWord(word,num){
    let newWord = word.substr(0, num);
    return newWord;
}