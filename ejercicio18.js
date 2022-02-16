/*
Dado un numero, mostrar sus divisores (hasta el número)

Input: 5
Output: 1 5
*/

function divisores(num){
    let strNum = "";

    for (let i = 0; i <= num; i++){
        num % i == 0 ? strNum += `${i} ` : ""
    }
    return strNum;
}