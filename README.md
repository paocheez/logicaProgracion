# Logica de Programación

Este repositorio contiene ejercicios para practicar mi lógica de programación con JavaScript. 

<h1>Ejercicio 1</h1>
Dado un numero devolver su tabla de multiplicar completa. Por ejemplo:

Input: 5
Output:
Tabla del 5
5 x 1 = 5
5 x 2 = 10
(...)

<h1>Ejercicio 2</h1>
Dado un String comprobar si es un palindromo o no (se leen igual del derecho y del revés), por ejemplo Bob, Pop, etc... No tener en cuenta espacios ni simbolos.

Input: "otto" 
Output: true

<h1>Ejercicio 3</h1>
Dado un String y una frase decir cuantas veces se repite la palabra en esa frase dada.

Input: ("Hola", "Hola cómo andas?")
Output: 1

<h1>Ejercicio 4</h1>
Dado un String, darle la vuelta, invertir el orden de sus caracteres. No se pueden usar metodos del lenguaje, solo estructuras de control.

Input: "hola"
Output: aloh

<h1>Ejercicio 5</h1>
Sacar el porcentaje de un numero. Mandamos tanto el porcentaje como el numero por parametros.

Input: (20, 100) -- El 20% de 100
Output: 20

<h1>Ejercicio 6</h1>
Dibujar un cuadrado hueco con astericos en consola con el tamaño de lados que definamos nosotros

Input: 4
Output:
<pre>
  * ** *
  *    *
  *    * 
  *    * 
  * ** * 
</pre>
<h1>Ejercicio 7</h1>
Dados dos numeros, devolver cuantos numeros impares hay ENTRE ellos

Input: (1, 100)
Output: 49

<h1>Ejercicio 8</h1>
Con un numero entero, invertirlo y devolverlo dado vuelta.

Input: 56
Output: 65

<h1>Ejercicio 9</h1>
Dados dos array devolver un array con los elementos comunes entre ambos sin duplicados

Input: ([1,2,3], [3,2,5,6])
Output: [2,3]

<h1>Ejercicio 10</h1>
Dado un numero mostrar una escalera con escalones de guiones usando el numero para los niveles de la escalera.

Input: 4
Output:
<pre>
  [-]
  [-][-]
  [-][-][-]
  [-][-][-][-]
</pre>

<h1>Ejercicio 11</h1>
Dado un String y una busqueda, censurar las coincidencias de la busqueda en el String con [-CENSURADO-] Si ambos llegan vacios, devolver un "No se puede leer el texto y la busqueda". Y si llega un solo parametro, devolver "No se puede hacer la busqueda"

Input: ('holi como va', 'holi) -- Frase y palabra a censurar
Output: [-CENSURADO-] como va

<h1>Ejercicio 12</h1>
Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones y cada numero debe empezar por "n"

Input: 100
Output:
<pre>
-n 100
-n 92
-n 84
etc..
</pre>

<h1>Ejercicio 13</h1>
Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamaño.

Input: ([1,2,3,4], 2) -- Array y tamaño de divisiones
Output: ([1,2], [3,4])

<h1>Ejercicio 14</h1>
Dado un String y un numero, repetir el String las veces que diga el numero

Input: ('denu', 2) -- Palabra y veces que se debe repetir
Output: 'denu' 'denu'

<h1>Ejercicio 15</h1>
Dado un String devolver el caracter mas usado.

Input: denuuu
Output: u

<h1>Ejercicio 16</h1>
Dado una cadena de texto, devolver cuantas vocales tiene la misma.

Input: denu
Output: 2

<h1>Ejercicio 17</h1>
Dado un numero, mostrar los numeros de 1 hasta el numero. Para multiplos de tres, escribir "denu" en lugar del numero, para los multiplos de cinco, "lemon", y si es multiplo de tres y cinco, "denolemon"

Input: 6
Output: 1 2 denu 4 lemon denu

<h1>Ejercicio 18</h1>
Dado un numero, mostrar sus divisores (hasta el número)

Input: 5
Output: 1 5

<h1>Ejercicio 19</h1>
Dado un array de objetos de peliculas (titulo, director y si fue vista), mostrar todas las peliculas indicando si la viste o no.

Input: [{"el señor de los anillos", "denu lemon", true}, {"avatar", "denu lemon", false}]
Output: I have seen "El señor de los anillos 2" directed by Deno Lemon I have not seen "El señor de los anillos 3" directed by Deno Lemon"

<h1>Ejercicio 20</h1>
Dados dos String crear un algoritmo que compruebe si son anagramas entre si (Si ambos usan los mismos caracteres en una misma cantidad)

Input: (Riesgo, Sergio)
Output: true
