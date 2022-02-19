/* 
Dado un numero mostrar la serie de fibonacci y el resultado de la misma
Input: 10 
Output: Serie completa: 0,1,1,2,3,5,8,13,21,34,55) Resultado: 55
*/

function fibon(limit){
    let fibo = [0,1];
    let serie = "Serie completa: ";

	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
	}

    return serie + fibo + " Resultado: "+fibo[fibo.length-1];
}