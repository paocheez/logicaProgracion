/* 
Dado un numero mostrar una escalera con escalones de guiones usando el numero para los niveles de la escalera.
Input: 4 Output:

  [-]
  [-][-]
  [-][-][-]
  [-][-][-][-]
*/

function stairs(number){
    let stair = `[-]`;
    let stairCount = `\n`;
    let stairsF = "";
    
    for(let i = 0 ; i <= number ; i++){
      stairCount = stair.repeat(i) + `\n`;
        stairsF += stairCount;
    }
    
    return stairsF;
}