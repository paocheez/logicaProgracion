/*
Dados dos numeros, devolver cuantos numeros impares hay ENTRE ellos
Input: (1, 100) Output: 49
*/

function oddAmount(numberOne,numberTwo){
    let count=0;
    for(let i = numberOne+1 ; i < numberTwo ; i++ ){
        if(i%2!=0){
            count++;
        }
    }
    return count;
}