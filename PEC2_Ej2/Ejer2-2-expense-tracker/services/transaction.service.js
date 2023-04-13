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

    bindTransactionListChanged(callback) {
        this.onTransactionListChanged = callback;
    }

    // Add transaction
    addTransaction(text, amount) {
        console.log("Add transaction service called")
        this.transactions.push(new Transaction({ text, amount }));

        this.updateLocalStorage();
    }

    updateLocalStorage() {
        this.onTransactionListChanged(this.transactions, this.getTotal(), this.getIncome(), this.getExpense())
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }

    // Remove transaction by ID
    deleteTransaction(id) {
        this.transactions = this.transactions.filter(transaction => transaction.id !== id);
        this.updateLocalStorage();
    }

    getAmounts() {
        return this.transactions.map(transaction => transaction.amount);
    }

    getTotal() {
        let amounts = this.getAmounts()
        return amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    }

    getIncome() {
        let amounts = this.getAmounts();
        return amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);
    }

    getExpense() {
        let amounts = this.getAmounts();
        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
        ).toFixed(2);
        return expense;
    }

    // Update the balance, income and expense
    updateValues() {
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