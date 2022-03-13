/*
Dado un array, crear otro array con el primer y ultimo elemento del array original
Input: [100,200,500,600] Output: [100,600]
*/

function lastFirst(numbers){
    let first= numbers.shift();
    let last= numbers.pop();
    let newArr=[];
    newArr.push(first,last)
  
    return newArr;
}