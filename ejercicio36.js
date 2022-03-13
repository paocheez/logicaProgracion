/*
Dado un String, devolver cuantas consonantes y vocales tiene.

Input: denu 
Output: Consonantes: 2 Vocales: 2
*/

function count(word){
    const vowels = word.match(/[aeiou]/gi); 
    const consonants = word.match(/[^aeiou]/gi);   
   
    return `Consonantes: ${consonants.length} Vocales: ${vowels.length}`
 }