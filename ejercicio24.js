/*
Dado un array de enteros y un numero, detectar si esa lista de numeros es una permutacion del 1 al numero aportado.
Permutacion: Secuencia de numeros en orden sin que falte ninguno entre ellos

Input: ([1,2,3,4,5], 5) Output: true
*/

function perm(arr,num){
    let result;

    for (let i = 1; i < num; i++){
        if(i===arr[i-1]){
            result = true
        }else{
            result = false
            break;
        }
    }
    return result;
}