const findOne = (list, { key, value }, { onSuccess, onError }) => { // Declara una variable findOne que contiene una arrow function que posee como tres argumentos: una variable (por el nombre parece ser un array), un objeto con dos elementos key y value, y otro con dos elementos, onSuccess y onError (por el nombre parecen ser callbacks).
  setTimeout(() => { // La función anterior llama a otra función global setTimeout con dos argumentos: el primero es una arrow function completa y el segundo es el número 2000. Esto hará que la arrow function solo se ejecute después de haber pasado 2000 milisegundos (2 segundos) después de ser llamada.
    const element = list.find(element => element[key] === value); // La función que se pasa como argumento a setTimeout declara una constante que aplica el método find a un array pasado como argumento anteriormente en la línea uno. Esta busca un elemento en el array que tenga un valor que coincide con el aportado como argumento (a través de la notación array[clave]) y que también haya sido asignado a la clave (key) aportada. De no encontrarlo, el método .find devuelve undefined.
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' }); // Aquí se usa un optional chaining operator para evaluar el resultado de la función de la línea anterior. Si esta arroja un dato llamará a la callback onSuccess, a la cual le pasa el propio dato como argumento. De lo contrario, llamará a la callback onError, a la cual le pasará como argumento un par key/value 
  }, 2000); // Como ya se ha descrito más arriba, aquí se especifica el tiempo tras el cual se ejecutará la función en milisegundos
};

const onSuccess = ({ name }) => console.log(`user: ${name}`); // Aquí se declara la función onSuccess, que se usará como callback. Toma como argumento un nombre y lo imprime por consola junto con el resto de lo especificado en el template literal
const onError = ({ msg }) => console.log(msg); // Aquí se declara la función onError, también utilizable como callback. Toma como argumento el mensaje de error pasado más arriba si el método .find no devuelve un dato de la lista

const users = [ //Aquí se declara el array users, este posee dos objetos. Cada uno contiene dos pares key/value.
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

console.log('findOne success'); //Esto imprime por pantalla el texto entre comillas simples
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }); // Aquí se llama a la función findOne, declarada más arriba, que toma como argumento el array declarado más arriba, así como un objeto con dos pares key/value que corresponde a los argumentos que se pasarán al método .find para que busque en el array un valor que coincida con una key llamada name y un valor llamado 'Carlos'. También se le pasa como argumento las callbacks definidas anteriormente. Imprimirá el mensaje "user: Carlos"

console.log('findOne error'); // Esto imprime por pantalla el texto entre comillas simples
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError }); // Aquí se llama a la misma función, se le pasa como argumento el mismo array de antes. El par key/value que se le pasa como argumento para la búsqueda a través del método .find no encontrará ningún resultado en el array users, por lo que devolverá el mensaje de error «ERROR: Element not found»

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
