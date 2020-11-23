# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?

    El valor que imprime el codigo es 5, y esto lo hace 5 veces.

    Esto se de debe a que la variable i está siendo declarada con un scope global en el bucle (var i = 0), setTimeout() es un metodo asincrono, y el valor de i al salir del buble es i = 5. Entonces la funcion que se encuentra dentro del setTimeout es ignorada hasta que se cumpla 1 segundo por cada ejecución (1000 milisegundos). 

    Al cumplirse este tiempo, el motor JS ejecuta estas funciones pendientes, y para ese momento el valor de la variable i es i = 5

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```
    Es tan simple como cambiar el scope de la variable i a let i = 0. De esta manera la función 
    console.log(i) utilizará el valor local de i en cada ciclo, y no un valor global 

    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000)
    }
}