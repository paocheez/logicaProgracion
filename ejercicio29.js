/*
Dado un numero indicar si es capicua o no (se leen igual de izquierda a derecha y viceversa)

Input: 2002 
Output: true
*/

function capicua(num){
    let reverse = num.toString()
    reverse = reverse.split('').reverse();
    let numReverse = reverse.join().replace(/,/g, "");
    let numBack = parseInt(numReverse,10)
    
    return (numBack===num)? true: false
}