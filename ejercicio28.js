/*
Dado un numero devolver su factorial (La multiplicacion de todos los numeros hasta llegar a el)

Input: 3 
Output: 6 (1x2x3) 
*/

function fact(num){
    let factorial = 1;
    let count = "";
  
    for(let i=1; i<=num; i++){
      factorial *= i;
      if(i!=num){
        count += `${i}x`
      }else{
        count += `${i}`
      }
    }
    return `${factorial} (${count})`
}
