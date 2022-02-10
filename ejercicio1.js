/*
Dado un numero devolver su tabla de multiplicar completa. 
Por ejemplo:
Input: 5 
Output: Tabla del 5 5 x 1 = 5 5 x 2 = 10 (...)
*/

function timesTable(number){
    let result =" ";
      for(let i=1; i<=10; i++){
          let op = i*number;
          result += `${number}x${i}=${op} `;
      }
      return result;
  }
  