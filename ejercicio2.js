/*
Dado un String comprobar si es un palindromo o no (se leen igual del derecho y del revés), por ejemplo Bob, Pop, etc... 
No tener en cuenta espacios ni simbolos.
Input: "otto" 
Output: true
*/


function verifyPalindrome(palindrome){
    let string = palindrome.replace(/\s/g, "");
    let stringSplit = string.split('');
    let reverseString = stringSplit.reverse();
    let arrayToString = reverseString.join().replace(/,/g, "");
  
    let check = string === arrayToString;
  
  return check;
}