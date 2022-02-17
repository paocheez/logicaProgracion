/*
Dados dos String crear un algoritmo que compruebe si son anagramas entre si (Si ambos usan los mismos caracteres en una misma cantidad)

Input: (Riesgo, Sergio) 
Output: true
*/

function anagram(word1, word2){
    let arrWord1 = word1.split('').sort();
    let arrWord2 = word2.split('').sort();
    
    word1 = arrWord1.join().replace(/,/g, "");
    word2 = arrWord2.join().replace(/,/g, "");
    
  if(word1==word2){
    return true;
  }else{
    return false;
  }
}