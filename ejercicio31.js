/*
Dado un numero, indicar que tipo de angulo es (recto, agudo, obtuso, etc..)
Referencia 

Agudos < 90
Recto == 90

Obtuso > 90

Llano == 180

Completo == 360

Mayor a 180 < 180

Input: 90 
Output: Angulo Recto
*/

function angle(num){
    let tipoAngulo=""

    if(num<=90){
        num===90?tipoAngulo="Angulo recto":tipoAngulo="Angulo agudo"
    }else if(num!=360){
        num===180?tipoAngulo="Angulo llano":tipoAngulo="Angulo obstuso"
    }else{
        tipoAngulo="Angulo completo"
    }

    return tipoAngulo
}