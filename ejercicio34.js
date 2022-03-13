/*
Dados dos numeros, devolver los resultados de las operaciones basicas entre ellos (suma, resta, multiplicacion, division)
Input: (2,2)

Output:
2 + 2 = 4
2 - 2 = 0
2 * 2 = 4
2 / 2 = 1
*/

function operations(numOne, numTwo){
    let sum = numOne+numTwo;
    let res = numOne-numTwo;
    let mul = numOne*numTwo;
    let div = numOne/numTwo;

    return `${numOne} + ${numTwo} = ${sum} \n ${numOne} - ${numTwo} = ${res} \n ${numOne} * ${numTwo} = ${mul} \n ${numOne} / ${numTwo} = ${div}`
}