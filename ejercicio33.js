/*
Hacer un reloj que en tiempo real vaya mostrando la hora a cada segundo. Solo se puede usar Date para conseguir la hora una vez, pero no para actualizarla

Input:
const myClock = new Clock();
myClock.turnOn();
Output: 14:20:16 -- Actualizar en tiempo real HH:MM:SS
*/
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    const now = new Date();

    const dateTime = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
        
    console.log(dateTime)
}, 1000);