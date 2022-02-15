/*
Con un numero entero, invertirlo y devolverlo dado vuelta.

Input: 56
Output: 65
*/

function reverseNumber(number){
    let numToArr = Array.from(String(number), Number);
   numToArr.reverse();
   let arrToNum =  parseInt(numToArr.join().replace(/,/g, ""));
       
   return arrToNum;
}
