/**
 * @class View
 *
 * Visual representation of the model.
 */

class TransactionView {
    constructor() {
        this.app = this.getElement("#root");
        this.h4 = this.createElement("h4");
        this.h4.textContent = "Your balance";
        this.h1 = this.createElement("h1");
        this.h1.id = "balance";
        this.h1.textContent = "$0.00"
        this.incExpContainer = this.createElement("div", "inc-exp-container");
        this.incomeBox = this.createElement("div", "income-box");
        this.expenseBox = this.createElement("div", "expense-box");
        this.h4Income = this.createElement("h4", "income");
        this.h4Income.textContent = "Income";
        this.h4Expense = this.createElement("h4", "expense");
        this.h4Expense.textContent = "Expense"
        this.pMP = this.createElement("p", "money-plus");
        this.pMP.textContent = "$0.00";
        this.pMM = this.createElement("p", "money-minus");
        this.pMM.textContent = "$0.00";
        this.h3History = this.createElement("h3", "History");
        this.h3History.textContent = "History";
        this.transactionList = this.createElement("ul", "list");
        this.h3New = this.createElement("h3", "new");
        this.h3New.textContent = "Add new transaction";
        this.form = this.createElement("form");
        this.formBox = this.createElement("div", "form-control");
        this.textLabel = this.createElement("label");
        this.textLabel.for = "text";
        this.textLabel.textContent = "Text";
        this.textInput = this.createElement("input");
        this.textInput.id = "text";
        this.textInput.type = "text";
        this.amountLabel = this.createElement("label");
        this.amountLabel.for = "amount"
        this.amountInput = this.createElement("input");
        this.amountInput.id = "amount";
        this.amountInput.type = "text";
        this.button = this.createElement("button", "btn");
        this.button.textContent = "Add transaction";

        this.app.append(this.h4, this.h1, this.incExpContainer, this.h3History, this.transactionList, this.h3New, this.form)
        this.incExpContainer.append(this.incomeBox, this.expenseBox);
        this.incomeBox.append(this.h4Income, this.pMP);
        this.expenseBox.append(this.h4Expense, this.pMM);
        this.form.append(this.formBox, this.textLabel, this.textInput, this.amountLabel, this.amountInput, this.button)
    }

    _resetInput() {
        this.textInput.value = "";
        this.amountInput.value = "";
    }

    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) element.classList.add(className);

        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    }

    displayTransactions(transactions, total, income, expense) {
        // Delete all nodes
        while (this.transactionList.firstChild) {
            this.transactionList.removeChild(this.transactionList.firstChild)
        }

        // Create nodes
        transactions.forEach(transaction => {
            const li = this.createElement("li", transaction.amount > 0 ? "plus" : "minus");
            li.id = transaction.id;
            li.innerHTML += `${transaction.text}<span>${transaction.amount > 0 ? "+" : ''}${transaction.amount}</span><button class="delete-btn">x</button>`

            // Append nodes
            this.transactionList.append(li);
        })

        this.updateValuesinDOM(total, income, expense)

    }

    // Update the balance, income and expense in DOM
    updateValuesinDOM(total, income, expense) {
        const balance = this.getElement("#balance");
        const money_plus = this.getElement("p.money-plus");
        const money_minus = this.getElement("p.money-minus");

        balance.textContent = `$${total}`;
        money_plus.textContent = `$${income}`;
        money_minus.textContent = `$${expense}`;
    }

    bindAddTransaction(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();

            if (this.textInput.value && this.amountInput.value) {
                handler(this.textInput.value, +this.amountInput.value);
                this.textInput.value = '';
                this.amountInput.value = '';
            }
        });
    }

    bindDeleteTransaction(handler) {
        this.transactionList.addEventListener("click", event => {
            if (event.target.className === "delete-btn") {
                const id = event.target.parentElement.id;
                handler(+id);
            }
        });
    }


}