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