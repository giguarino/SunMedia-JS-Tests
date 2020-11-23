# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.

Para solucionarlo habría que usar alguna librería de terceros que permita manejar las operaciones asíncronas, como Bluebird, es6-promise, o usar Promise Polyfill


Una solución utlizando Bluebird por ejemplo, sería de la siguiente manera:

<script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js"></script>

'use strict';
var promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

promise
    .then(function(successMessage) {
        console.log("Yes! " + successMessage);
    })
    .catch(function(failMessage) {
        console.log("No! " + failMessage);
    });
