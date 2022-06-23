### Preguntas acerca de Javascript

#### ¿Qué es JavaScript?

JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

#### ¿Realmente es Javascript un lenguaje interpretado?

Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador

Teoria.

Un lenguaje interpretado es un lenguaje de programación para el que la mayoría de sus implementaciones ejecuta las instrucciones directamente, sin una previa compilación del programa a instrucciones en lenguaje máquina. El intérprete ejecuta el programa directamente, traduciendo cada sentencia en una secuencia de una o más subrutinas ya compiladas en código máquina.

#### ¿Por qué decimos que Javascript es un lenguaje dinámico?

Corre directamente en la etapa de Runtime, sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores no se muestren sino hasta que se ejecuta el programa. Lo que se ve a primera vista, cuando se analiza el código, es muy probable que no sea lo que se va a obtener cuando el programa se ejecute.

JavaScript permite declarar (por ejemplo) variables cuyo valor (y tipo) solo se conocerá al momento de su ejecución en función de las condiciones dadas al momento de correrlo en un entorno real. En cambio, los lenguajes estáticos no compilarán en código ejecutable a menos que todos los valores (o tipos de valores) se conozcan por adelantado.

let foo = 42;    // foo ahora es un número
foo     = 'bar'; // foo ahora es un string
foo     = true;  // foo ahora es un booleano

#### ¿Débilmente tipado?

Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc).

#### ¿Por qué decimos que javascript es un leguaje basado en prototipos?

JavaScript es a menudo descrito como un lenguaje basado en prototipos - para proporcionar mecanismos de herencia, los objetos pueden tener un objeto prototipo, el cual actúa como un objeto plantilla que hereda métodos y propiedades.

Un objeto prototipo del objeto puede tener a su vez otro objeto prototipo, el cual hereda métodos y propiedades, y así sucesivamente. Esto es conocido con frecuencia como la cadena de prototipos, y explica por qué objetos diferentes pueden tener disponibles propiedades y métodos definidos en otros objetos.

#### ¿JavaScript es un lenguaje multiparadigma?

JavaScript es un lenguaje multiparadigma y, port tanto, podemos usarlo de distintas formas para desarrollar las aplicaciones.

###### programación imperativa:

Se describen las instrucciones paso a paso para generar la solucion al problema.

###### programación funcional:

usando funciones que se pueden ir anidando hasta conseguir el resultado que se espera.

###### programación orientada a objetos:

Se usan oobjetos que encapsula varibales y metodos, para interactuar con otros objetos, y de esta forma se intenta obtener el resultado esperado.

#### ¿Qué es el scope de varibles en JavaScript?

El scope, que se traduce como “ámbito” o “alcance” en español, hace referencia a la visibilidad y a la vida útil de una variable. El ámbito, en esencia, determina en qué partes de nuestro programa tenemos acceso a una cierta variable.

En JavaScript existen principalmente tres tipos de ámbitos: el ámbito global, el ámbito local o de función y el ámbito de bloque.

```javascript
let variableX = "Hello Función";
console.log(variableX);
console.log(variableY);
console.log(variableZ);
function greet() {
  let variableY = "Hello Global";
  console.log(variableX);
  console.log(variableY);
  console.log(variableZ);
  if (true) {
    let variableZ = "Hello bloque";
    console.log(variableX);
    console.log(variableY);
    console.log(variableZ);
  }
  console.log(variableX);
  console.log(variableY);
  console.log(variableZ);
}
console.log(variableX);
console.log(variableY);
console.log(variableZ);
```

#### ¿Qué es el Hoisting en JavaScript?

En JavaScript las declaraciones de las variables y funciones se asignan en memoria en tiempo de compilación; a nivel práctico es como si el intérprete moviera dichas declaraciones al principio de su ámbito. Este comportamiento es conocido como hoisting. Gracias al hoisting podríamos ejecutar una función antes de su declaración.

```javascript
greet(); //”Hello world”;
function greet() {
  let greeting = "Hello world!";
  console.log(greeting);
}
```

```javascript
const number = 10;
function printNumber() {
  console.log(number);
}
function app() {
  const number = 5;
  printNumber();
}
app();
```
#### ¿Qué imprime ésto en pantalla?
```javascript
console.log(mivariable)
var mivariable = 'hola';
```
Ésto imprime undefined en pantalla.
¿Por qué? porque Javascript, cuando encuentra la palabra reservada “var”, lo que hace es mover la declaración de la variable al inicio (ésto se conoce como hoisting). En otras palabras, Javascript traduce (internamente) el código que vimos, al siguiente:Ésto imprime undefined en pantalla. ¿Por qué? porque Javascript, cuando encuentra la palabra reservada “var”, lo que hace es mover la declaración de la variable al inicio (ésto se conoce como hoisting). En otras palabras, Javascript traduce (internamente) el código que vimos, al siguiente:
```javascript
var mivariable
console.log(mivariable)
mivariable = 'hola';
```
Como todas las variables a las que no se les asigna nada se crean con el valor undefined, lo que se termina imprimiendo en la consola es undefined.


#### ¿Cuales son los tipos de datos en JavaScript?
- Seis tipos de datos primitivos, controlados por el operador typeof
  - Undefined: typeof instance === "undefined"
  - Boolean: typeof instance === "boolean"
  - Number: typeof instance === "number"
  - String: typeof instance === "string"
  - BigInt: typeof instance === "bigint"
  - Symbol: typeof instance === "symbol"
- Null: typeof instance === "object". Tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra null;
- Object: typeof instance === "object". Tipo estructural especial que no es de datos pero para cualquier instancia de objeto construido que también se utiliza como estructuras de datos: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date y casi todo lo hecho con la palabra clave new;
- Function: una estructura sin datos, aunque también responde al operador typeof: typeof instance === "function". Esta simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor Object.
#### ¿Cuál es la diferencia entre los operadores (==), (===), (!=)?

- Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato.

- Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos.

- Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negándola.

#### ¿Cuál es la diferencia entre null y undefined?

- El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío". Es uno de los valores primitivos de Javascript.

- Undefined Es el valor por default que se le asigna a una variable que esta sin definir aun. Aunque también existe una propiedad global "undefined" que representa uno de los valores primitivos de JS.

#### ¿Cuál es la diferencia entre sincronismo y asincronismo?

- En un código síncrono cada operación se hace de una vez, bloqueando el flujo de ejecución de la siguiente mientras se espera una respuesta, cuando esta se procesa pasa a la siguiente operación y así sucesivamente..

- Un código asíncrono no espera a las instrucciones diferidas y continúa con su ejecución. Es decir, el código asíncrono se ejecutará sin necesidad que el código anterior haya completado su tarea.

#### ¿Qué es el DOM?

El DOM (Document Object Model) es la estructura de objetos que genera el navegador cuando se carga un documento y que puede ser manipulada con JS.

#### ¿Qué es una promesa en Javascript?

Una promesa es un objeto que representa la terminación o error de un evento asincrónico.

#### ¿Qué es un callback?

Un callback es una función (callback) que la pasás a otra función como parámetro. El callback se ejecuta cuando la funcion principa finalice.

#### ¿Qué imprime ésto en pantalla y por qué?

```javascript
console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
console.log(3);
```
¿Por qué? Porque setTimeout es una función asincrónica, esto significa que se ejecuta “más tarde”. Cuando Javascript encuentra una función asincrónica la coloca en una cola de “cosas asincrónicas” y sigue ejecutando el resto del código que le falte, es por eso que se imprime 1 y luego 3. Cuando termina de ejecutar el código principal, revisa esa cola de cosas asincrónicas y, si hay algo para ejecutar, lo ejecuta, en nuestro ejemplo ejecuta setTImeout. Es por eso que finalmente termina imprimiendo 2.