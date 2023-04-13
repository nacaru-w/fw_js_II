/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class TransactionController {
    constructor(service, view) {
        this.service = service;
        this.view = view;

        // Explicit this binding
        this.service.bindTransactionListChanged(this.onTransactionListChanged);
        this.view.bindAddTransaction(this.service.addTransaction);
        this.view.bindDeleteTransaction(this.handleDeleteTransaction);

        // Display initial transactions
        this.onTransactionListChanged(this.service.transactions, this.service.getTotal(), this.service.getIncome(), this.service.getExpense());
    }

    onTransactionListChanged = (transactions, total, income, expense) => {
        this.view.displayTransactions(transactions, total, income, expense);
    }

    handleAddTransaction = (transactionText, transactionValue) => {
        this.service.addTransaction(transactionText, transactionValue)
    }

    handleDeleteTransaction = id => {
        this.service.deleteTransaction(id);
    }

}