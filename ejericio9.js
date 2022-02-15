/*
Dados dos array devolver un array con los elementos comunes entre ambos sin duplicados
Input: ([1,2,3], [3,2,5,6]) Output: [2,3]
*/

function commonNumbers(arrOne, arrTwo){
    let finalArr = [];
    for(let i = 0 ; i < arrOne.length ; i++){
       for(let j = 0 ; j < arrTwo.length; j++){
            if((arrOne[i]===arrTwo[j])&&finalArr.indexOf(arrOne[i])===-1){
                    finalArr.push(arrOne[i]);
            }
        }
    }
    return finalArr;
}