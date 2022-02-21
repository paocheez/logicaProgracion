/*
Dado un array de numeros, devolver el mismo con sus numeros elevados al cuadrado, y se debe eliminar cualquier contenido que no sea numerico

Input: [5,6,7,"denu"] 
Output: [25,36,49]
*/

function square(elem){
    let newArr = []
    let elemSquare=0;

    for(let i=0; i<elem.length; i++){
        if(typeof(elem[i])!=="string"){
            elemSquare = elem[i]*elem[i]
            newArr.push(elemSquare)
        }
    }

    return newArr
}