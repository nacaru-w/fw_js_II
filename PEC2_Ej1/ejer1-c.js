const findOne = (list, { key, value }) => { // Aquí en lugar de como pasaba en el ejercicio anterior, no pasamos los callbacks como argumentos
    return new Promise((resolve, reject) => { // Aquí usamos un constructor de promesa, al que le pasaremos como argumentos las funciones que representan lo que ocurre cuando al promesa es resuelta (fulfilled) o rechazada (rejected).
        setTimeout(() => { // De nuevo usamos el método setTimeout para simular una operación asíncrona
            const element = list.find(element => element[key] === value);
            element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' }); // Aquí se llama a las funciones de resolución o rechazo de forma similar a cómo se hacía en el ejercicio previo pero utilizando las funciones del constructor de promesas.
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

console.log('findOne success');

async function findOneSuccess() {
    try {
        const user = await findOne(users, { key: 'name', value: 'Carlos' });
        onSuccess(user);
    } catch (error) {
        onError(error);
    }
}

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' })
    .then(onSuccess)
    .catch(onError); // Esta función, sin embargo, ejecutará el error al obtenerse un reject en la ejecución de findOne, por lo que imprimirá «ERROR: Element Not Found»

async function findOneError() {
    try {
        const user = await findOne(users, { key: 'name', value: 'Fermin' });
        onSuccess(user);
    } catch (error) {
        onError(error);
    }
};