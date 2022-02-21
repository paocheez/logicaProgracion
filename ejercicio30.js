/*
Dado un array de numeros, devolver el array sin elementos duplicados. Lo mismo si hay algun String, debemos borrarlo

Input: [1,1,2,2,3,3,'denu'] 
Output: [1,2,3]
*/

function duplicados(elem){
    let newArr = []
    let check = ""

    for(let i=0; i<elem.length; i++){
        let verif = item => item==elem[i]
        check=newArr.some(verif) 
        if(!check && (typeof(elem[i])!=="string")){
            newArr.push(elem[i])
        }
    }
    return newArr
}