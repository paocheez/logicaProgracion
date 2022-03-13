/*
Dado un texto comprobar que sea un email valido

Input: denu@gmail.com 
Output: true
*/
function validEmail(email){
    if(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        return true
    }else{
        return false
    }
}