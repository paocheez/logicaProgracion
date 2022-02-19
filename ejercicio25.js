/*
Dado un String, si hay mas mayusculas, pasar todo a mayuscula, y viceversa.
Input: "DENu" Output: DENU
*/

function mayMin(word){
    for(let i = 0; i < word.length; i++){
        if(word.charAt(i)===word.charAt(i).toUpperCase()&&word.charAt(i)!==" "){
            word=word.toUpperCase();
          break
        }
    }
  return word
}