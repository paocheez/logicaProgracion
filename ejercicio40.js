/*
Dado un array de numeros devolver el valor mas bajo y el valor mas alto

Input: [1,2,3,4,5] 
Output: Bajo: 1 Alto:5
*/

function orderNumbers(num){
    return `Bajo: ${num[0]} Alto: ${num[num.length-1]}`
}