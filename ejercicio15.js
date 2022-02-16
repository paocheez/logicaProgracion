/* 
Dado un String devolver el caracter mas usado.

Input: denuuu
Output: u
*/

function mostUsed(word){
    let repetido = "";
    let timesRepeat = 0;
    let re;
    let letterRepeat = "";
    
      for(let i = 0; i < word.length; i++){
          re = new RegExp("[^"+ word[i] +"]","g");
          repetido = word.replace(re, "");
        
          if(repetido.length >= timesRepeat){
            timesRepeat = repetido.length;
            letterRepeat = repetido[0];
          }
      }
    return letterRepeat;
  }