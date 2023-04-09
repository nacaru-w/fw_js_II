/**
 * @class Service
 *
 * Manages the data of the application.
 */

class TransactionService {

    constructor() {

        const localStorageTransactions = JSON.parse(
            localStorage.getItem('transactions')
        );

        this.transactions = (localStorage.getItem('transactions') !== null ? localStorageTransactions : []).map(
            transaction => new Transaction(transaction)
        );
    }

    // Add transaction
    addTransaction(text, amount) {
        this.transactions.push(new Transaction({ text, amount }));

        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    // Remove transaction by ID
    removeTransaction(id) {
        transactions = this.transactions.filter(transaction => transaction.id !== id);

        this.updateLocalStorage();

        init(); // ?? qué hacer con esto
    }

    updateValues() {
        // TODO: pensar si va en el servicio o en la callback 
        const amounts = this.transactions.map(transaction => transaction.amount);

        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

        const income = amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);

        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
        ).toFixed(2);
    }

}