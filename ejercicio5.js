/*
    Sacar el porcentaje de un numero. Mandamos tanto el porcentaje como el numero por parametros.
    Input: (20, 100) -- El 20% de 100 Output: 20
*/

function percent(perc,number){
    let total;
    total = (perc*number)/100;

    return `El ${perc}% de ${number} es ${total}`;
}