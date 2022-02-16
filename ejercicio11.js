/* 
Dado un String y una busqueda, censurar las coincidencias de la busqueda en el String con [-CENSURADO-] Si ambos llegan vacios, devolver un "No se puede leer el texto y la busqueda". Y si llega un solo parametro, devolver "No se puede hacer la busqueda"

Input: ('holi como va', 'holi) -- Frase y palabra a censurar 
Output: [-CENSURADO-] como va
*/

function censored(phrase,word){
    let stringCensored = "";
    let censored = "[-CENSURADO-]";

    if( phrase && word ){
        let arr = phrase.split(' ');

        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i]==word){
                arr[i] = censored;
            }
        }
        stringCensored = arr.join().replace(/,/g, " ");

    }else if( (!phrase && word) || ( phrase && !word ) ){
        stringCensored = "No se puede hacer la búsqueda";
    }else{
        stringCensored = "No se puede leer el texto y la búsqueda";
    }

    return stringCensored;
}
