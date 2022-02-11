/*
Ejercicio 3
Dado un String y una frase decir cuantas veces se repite la palabra en esa frase dada.

Input: ("Hola", "Hola cómo andas?")
Output: 1
 */

function foundConcurrence(word,phrase){
    let phraseArray = phrase.split(' ');
    let count = 0;
    for(let i = 0; i <= phraseArray.length; i++){
        if(phraseArray[i] == word){
            count++;
        }
    }
    return count;
}

