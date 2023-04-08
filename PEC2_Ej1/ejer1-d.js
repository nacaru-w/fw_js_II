const findOne = (list, { key, value }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const element = list.find(element => element[key] === value);
            element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
        }, 2000);
    });
};

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

const users = [
    {
        name: 'Carlos',
        rol: 'Teacher'
    },
    {
        name: 'Ana',
        rol: 'Boss'
    }
];

Promise.allSettled([ // Usando el método .allSettled, ambas promesas se resuelven paralelamente
    findOne(users, { key: 'name', value: 'Carlos' }), // Aquí hacemos una llamada a la función findOne con los valores que devolverán una promesa resuelta
    findOne(users, { key: 'name', value: 'Fermin' }) // Justo inmediatamente lo volveremos a hacer pero con los valores que devolverán un error, de manera que se ejecutan paralelamente
])
    .then(results => { // Para cuando el código llega a este paso, .allSettled ha guardado la información en un array con los resultados de cada ejecución de findOne, aquí lo pasamos como argumento para poder seguir trabajando con él
        console.log(results) // Esto lo puse para testear lo que había guardado en el argumento, normalmente debería imprimir un array con dos promesas: una cumplida y otra rechazada
        for (let result of results) { // Así que lo que hacemos aquí es iterar sobre el array que contiene las promesas
            if (result.status === 'fulfilled') { // Para saber si la promesa se ha resuelto o ha devuelto un error, añadimos una condición que evalúa el estado de cada promesa
                onSuccess(result.value); // La promesa resuelta imprimirá «user: Carlos» a través de la llamada a la función onSuccess
            } else {
                onError(result.reason); // La otra promesa, rechazada, imprimirá el mensaje de error «ERROR: Element Not Found»
            }
        }
    });