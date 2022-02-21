/*
Dado un numero mostrar a cuantos años, meses y dias equivale.

Input: 920 
Output: 2 años, 6 meses y 2 dias
*/

function days(num){
    let year = Math.floor(num / 365); ;
    let month = Math.floor((num % 365) / 30);
    let day = Math.floor((num % 365) % 30);

    return `${year} años, ${month} meses, ${day} dias`;
}