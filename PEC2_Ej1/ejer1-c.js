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

console.log('findOne success');
async function findOneSuccess() { // Aquí se crea la función findOneSuccess, usando async function como declaración de la misma, esto nos permitirá más tarde añadir el operador await
    try { // el .then y .catch se ha sustituido por try/catch, ya que la asincronía es producida por async/await en lugar de esos métodos
        const user = await findOne(users, { key: 'name', value: 'Carlos' }); // Aquí, await para la ejecución del código hasta que resuelve la función findOne
        onSuccess(user); // Aquí se llama a la función onSuccess que imprimirá por pantalla «user: Carlos» 
    } catch (error) {
        onError(error);
    }
}

findOneSuccess() // Llamada a la función 

console.log('findOne error');
async function findOneError() { // De forma similar al caso superior, aquí se usa async para poder añadir await posteriormente
    try {
        const user = await findOne(users, { key: 'name', value: 'Fermin' }); // Aquí le pasamos a la función findOne un valor que no se encuentra en la la lista users
        onSuccess(user);
    } catch (error) { // por lo que en la ejecución de la promesa devolverá un mensaje de error que será recuperado por este catch
        onError(error); // y aquí llamará a la función OnError que imprimirá por pantalla el mensaje de error «ERROR: Element Not Found»
    }
}

findOneError() // Llamada a la función 
