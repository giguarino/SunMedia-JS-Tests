# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta 
misma carpeta donde hay un pequeño fragmento de código que deberás analizar 
y responder a las siguientes cuestiones. 

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
 hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al 
 finalizar la ejecución del script?

   Segun MDN web docs (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign) El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino, cuya sintaxis es Object.assign(target, ...sources)

    Dicho esto, el resultado de las variables declaradas en test.js sería el siguiente:

        rgb = {
            red: #FF0000,
            green: #00FF00,
            blue: #0000FF,
            white: #FFFFFF,
            black: #000000
        }

        wb = {
            white: "#FFFFFF",
            black: "#000000"
        }

        colors = {
            red: #FF0000,
            green: #00FF00,
            blue: #0000FF,
            white: #FFFFFF,
            black: #000000
        }

    Como podemos observar, colors y rgb tienen los mismos valores, ya que Object.assign(rgb, wb) 
    copia los valores de wb en rgb y esta copia es almacenada en la variable colors.

2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores 
iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del 
script.

        Como se indicó en la respuesta anterior, Object.assign() permite como parámetros un target, 
        pero una o mas sources. Entonces al colocar la variable rgb y wb como fuente, y un objeto vacío
        como destino, quedaría solucionado.

        var colors = Object.assign({},rgb, wb);


3. Además, tenemos un bug localizado en dispositivos con Internet Explorer… 
El código de nuestro script no funciona y necesitamos que se ejecute también 
en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
 propones?

**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug. 

     Segun MDN web docs (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign) El método Object.assign() no está disponible en el estandar de Internet explorer desde su versión 6 (no esta soportado).

    Puede solucionarse con el uso de un polyfill que diera soporte a ese método. En la misma pagina de MDN web docs podemos encontrar este codigo.

        if (typeof Object.assign !== 'function') {
            // Must be writable: true, enumerable: false, configurable: true
            Object.defineProperty(Object, "assign", {
                value: function assign(target, varArgs) { // .length of function is 2
                'use strict';
                if (target === null || target === undefined) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var to = Object(target);

                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];

                    if (nextSource !== null && nextSource !== undefined) { 
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                        }
                    }
                    }
                }
                return to;
                },
                writable: true,
                configurable: true
            });
        }