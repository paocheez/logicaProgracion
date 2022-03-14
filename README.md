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

<h1>Ejercicio 21</h1>
Dada un String y un numero, cortar el string mostrando X cantidad de caracteres dependiendo del numero enviado.

Input: (Denu, 2)
Output: De

<h1>Ejercicio 22</h1>
Dados dos numeros indicar cual es mayor y cual es menor.

Input: (2, 5)
Output: 2 is less than 5

<h1>Ejercicio 23</h1>
Dado un String poner en mayuscula la primera letra de cada palabra en la cadena y devolverla.

Input: hola soy denu lemon
Output: Hola Soy Denu Lemon

<h1>Ejercicio 24</h1>
Dado un array de enteros y un numero, detectar si esa lista de numeros es una permutacion del 1 al numero aportado.

Permutacion: Secuencia de numeros en orden sin que falte ninguno entre ellos

Input: ([1,2,3,4,5], 5)
Output: true

<h1>Ejercicio 25</h1>
Dado un String, si hay mas mayusculas, pasar todo a mayuscula, y viceversa.

Input: "DENu"
Output: DENU

<h1>Ejercicio 26</h1>
Dado un numero mostrar la serie de fibonacci y el resultado de la misma

Input: 10
Output: Serie completa: 0,1,1,2,3,5,8,13,21,34,55) Resultado: 55

<h1>Ejercicio 27</h1>
Dado un numero mostrar a cuantos años, meses y dias equivale.

Input: 920
Output: 2 años, 6 meses y 2 dias

<h1>Ejercicio 28</h1>
Dado un numero devolver su factorial (La multiplifacion de todos los numeros hasta llegar a el)

Input: 3
Output: 6 (1x2x3)

<h1>Ejercicio 29</h1>
Dado un numero indicar si es capicua o no (se leen igual de izquierda a derecha y viceversa)

Input: 2002
Output: true

<h1>Ejercicio 30</h1>
Dado un array de numeros, devolver el array sin elementos duplicados. Lo mismo si hay algun String, debemos borrarlo

Input: [1,1,2,2,3,3,'denu']
Output: [1,2,3]

<h1>Ejercicio 31</h1>
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

<h1>Ejercicio 32</h1>
Dado un array de numeros, devolver el mismo con sus numeros elevados al cuadrado, y se debe eliminar cualquier contenido que no sea numerico

Input: [5,6,7,"denu"]
Output: [25,36,49]

<h1>Ejercicio 33</h1>
Hacer un reloj que en tiempo real vaya mostrando la hora a cada segundo. Solo se puede usar Date para conseguir la hora una vez, pero no para actualizarla

Input:
<pre>
const myClock = new Clock();
myClock.turnOn();
</pre>
Output: 14:20:16 -- Actualizar en tiempo real HH:MM:SS

<h1>Ejercicio 34</h1>
Dados dos numeros, devolver los resultados de las operaciones basicas entre ellos (suma, resta, multiplicacion, division)

Input: (2,2)
<pre>
Output:
2 + 2 = 4
2 - 2 = 0
2 * 2 = 4
2 / 2 = 1
</pre>

<h1>Ejercicio 35</h1>
Dado un array, crear otro array con el primer y ultimo elemento del array original

Input: [100,200,500,600]
Output: [100,600]

<h1>Ejercicio 36</h1>
Dado un String, devolver cuantas consonantes y vocales tiene.

Input: denu
Output: Consonantes: 2 Vocales: 2

<h1>Ejercicio 37</h1>
Dado un Array o Texto devolver el elemento o palabras que mas aparecen dentro de estos.

Input: [denu, denu, lemon]
Output: denu

<h1>Ejercicio 38</h1>
Dado un numero mostrar una lista de los cuadrados de todos los numeros naturales hasta llegar al mismo.

Input: 5
Output: [ 0, 1, 4, 9, 16 ]

<h1>Ejercicio 39</h1>
Dado un texto comprobar que sea un email valido

Input: denu@gmail.com
Output: true

<h1>Ejercicio 40</h1>
Dado un array de numeros devolver el valor mas bajo y el valor mas alto

Input: [1,2,3,4,5]
Output: Bajo: 1 Alto:5

<h1>Ejercicio 41</h1>
Dado un numero, mostrar un triangulo de astericos con ese numero de filas, un arbolito de X filas.

Input: 4
Output:
<pre>
   *
  ***
 *****
*******
</pre>

<h1>Ejercicio 42</h1>
Dado dos numeros, sacar un numero random entre ellos

Input: 1,100
Output: 46 -- Random

<h1>Ejercicio 43</h1>
Dado un array de numeros, sacar la media de todos (la suma de todos los numeros dividido por la cantidad de elementos, el promedio)

Input: [1,2,3]
Output: 3

<h1>Ejercicio 44</h1>
Dado un array de Strings, devolver otro con los valores que esten formados por mas de dos palabras

Input: ["hola denu", "pastel", "rosa"]
Output: ["hola denu"]

<h1>Ejercicio 45</h1>
Dado un array de alumnos, con su nombre y su calificacion, mostrar cuantos aprobaron y cuantos no. (Aprobás con 6)

Input: [["Denu", 4], ["Jorge", 2], ["Mafalda", 10]]
Output: 2 suspensos y 1 aprobado

<h1>Ejercicio 46</h1>
Dado un String devolver los posibles substrings

Input: hola
Output: ['h','o','l','a','ho','la','hol','ola','hola]

<h1>Ejercicio 47</h1>
Dado un array de objetos devolver cuales son las aficiones mas comunes de los usuarios

Input: {aficiones de usuarios}
Output: {informatica: 6, futbol: 4, cine: 3}

<h1>Ejercicio 48</h1>
Dado un string devolver las letras que se repiten solo una vez y cual es la primera

Input: Denu es Genial
Output: [[D, U, G, I, L], D]

<h1>Ejercicio 49</h1>
Dado un objeto, ver si existe una propiedad en concreto o no

Input: (objeto, "nombre")
Output: true -- existe la prop nombre en objeto

<h1>Ejercicio 50</h1>
Dado un numero, devolver cuantos bucles tiene. Se tiene uno cuando tiene un circulo cerrado, por ejemplo, 6 tiene un bucle, 8 tiene dos, 1 tiene cero.

Input: (288661)
Output: 6

<h1>Ejercicio 51</h1>
Dado un array con numeros devolver dos array, uno con los pares y otro con impares

Input: [2,4,5,6,7,8]
Output: Pares [2,4,6,8] Impares [5,7]

<h1>Ejercicio 52</h1>
Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos.

Calculo hipotenusa √CatA^2 + CatB^2

Input: (8, 10)
Output: 12,81

<h1>Ejercicio 53</h1>
Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil, expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.
1km/h => 0,28 m/s

Input: 100
Output: 27,78

<h1>Ejercicio 54</h1>
Se dan dos array del mismo tamaño de numeros, y un numero como parametros. Iterando al primer array de izquierda a derecha y al segundo array de derecha a izquierda, devolver cuantas veces se obtiene un numero con los pares de numeros que son menores al tercer parametro.

Input: [1, 2, 3] [1, 2, 3] 31
Output: 2 (Porque 31 no es menor a 31, 22 es menor a 31 y 13 es menor a 31)

<h1>Ejercicio 55</h1>
Encontrar el tamaño de la ultima palabra. Si esta vacio, devolverá 0. Si es una sola palabra, se toma el tamaño de esa sola palabra.

Input: Hola Mundo
Output: 5

<h1>Ejercicio 56</h1>
De un array de String, se debe devolver el prefijo mas grande que se encuentre entre las cadenas.

Input: ["flower", "flow", "flight"]
Output: fl
Resultado si no existe prefijo
Input: ["dog", "raccoon", "car"]
Output: ""

<h1>Ejercicio 57</h1>
De una cadena de numeros y caracteres, crear una cuenta, recibimos el Infix, creamos el Postfix y devolvemos el Prefix. La conversion seria asi:

Input: ["2", "1", "+", "3", "*"] => ((2+1)*3) => 9
Otro ejemplo es:
Input: ["4", "13", "5", "/", "+"] => (4 + (13/5)) => 6
Tenemos 3 tipos de notaciones: (Asi funcionan las calculadoras)
Infix = (2 + 1) + 3
Postfix = Es la expresion del Infix evaluada, tambien se le dice "Reverse Polish notation"
Prefix = Es la respuesta de la cuenta
Hay ciertas reglas para resolver las expresiones Postfix. Para eso debemos utilizar una pila. Por ejemplo, tenemos el siguiente Infix [2, 1, +, 3, *], cuando nos encontramos con numeros, los agregamos a la pila HASTA encontrarnos con un operador. Es decir, hasta el signo +, nuestra pila tiene dos numeros, 2, 1, entonces, cuando llegamos al operador, realizamos la cuenta, es decir, 2 + 1. Luego, ese resultado lo agregamos a la pila, y seguimos. En este caso, agregamos 3, y luego nos chocamos con la multiplicacion, asi que ahi, hacemos (2 + 1) * 3, dando como resultado 9.

<h1>Ejercicio 58</h1>
Dado el titulo de la columna, averiguar el numero de la columna. Estará en mayuscula.

Input: B
Output: 2 // Por su orden en el abecedario
Tambien puede venir doble, es decir
Input: AA
Output: 27 // La operacion seria 26 * 1 + 1
Input: AAA
Output: 703 // (26 * 26 * 1) + (26 * 1) + 1
Input: ZY
Output: 701 // (26 * 26) + 25
y asi sucesivamente...

<h1>Ejercicio 59</h1>
Dado un string que no puede ser vacio, se podrá eliminar de el, como mucho, un solo caracter, para volverlo un palindromo valido. Tambien valida si es palindromo o no sin necesidad de quitar nada.

Input: abca
Output: True // Se elimina la letra C
Input: aba
Output: True // No se elimina nada pero es palindromo
Input: abcd
Output: False // No es palindromo ni eliminando ninguno
