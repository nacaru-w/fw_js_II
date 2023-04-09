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
        transactions = transactions.filter(transaction => transaction.id !== id);

        this.updateLocalStorage();

        init(); // ?? qué hacer con esto
    }

}