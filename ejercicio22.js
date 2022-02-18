/*
Dados dos numeros indicar cual es mayor y cual es menor.

Input: (2, 5)
Output: 2 is less than 5
*/

function twoNum(num1,num2){
    if(num1<num2){
        return `${num1} is less than ${num2}`
    }else if(num1>num2){
        return `${num2} is less than ${num1}`
    }else{
        return `${num2} and ${num1} are equals`
    }
}