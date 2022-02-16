/* 
Dado un String y un numero, repetir el String las veces que diga el numero

Input: ('denu', 2) -- Palabra y veces que se debe repetir 
Output: 'denu' 'denu'
*/

function repeat(word,number){
    let wordFormat = `'${word}' `
     let wordRepeated = wordFormat.repeat(number);
     return wordRepeated;
 }