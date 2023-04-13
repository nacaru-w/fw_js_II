## ¿Por qué el valor de `this` es undefined?

El `this` que tiene valor `undefined` al realizar el cambio es el que aparece la función `addTodo`. El valor de `this` no depende de la definición de los métodos sino que se determina durante la ejecución del programa. En este caso `this` tiene un valor de `undefined` por estar en `strict mode` (todo el contenido de módulos se encuentra automáticamente en `strict mode`) y por haber pasado el método `addTodo` como callback.

En el código original, `handleAddTodo` está definida como una arrow function, por lo que capturará el contexto (_scope_) del padre. Sin embargo, al cambiarla por una función que no es de este tipo (`this.service.addTodo`), en la ejecución del código, el contexto se pierde, por lo que tiene sentido que `this` devuelva `undefined` en ese punto de la ejecución.

Para solucionar este problema, se crea un _explicit binding_. Esto permite asociar una ejecución al contexto de un objeto en concreto. Lo que hacemos en la ejecución de la función que realiza el _binding_ es ligar `this` adecuadamente para que pueda seguir ejecutándose.

### Bibliografía consultada para la resolución de este ejercicio:

* [Understanding "this" in javascript with arrow functions](https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc).
* [MDN: this in arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#this_in_arrow_functions)
* [Why this gets undefined in high order functions in Javascript?](https://eliux.github.io/javascript/common-errors/why-this-gets-undefined-inside-methods-in-javascript/)
* [Explicit binding rule for this keyword in JS](https://medium.com/@msinha2801/explicit-binding-rule-for-this-keyword-in-js-712405b0a11)