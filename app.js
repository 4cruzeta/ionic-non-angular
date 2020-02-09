const itemInput = document.querySelector('#input-item');
const valorInput = document.querySelector('#input-valor');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmlBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    itemInput.value = '';
    valorInput.value = '';
};    

confirmlBtn.addEventListener('click', () => {
    const enteredItem = itemInput.value;
    const enteredValor = valorInput.value;

    if (
        enteredItem.trim().length <= 0 ||
        enteredValor <= 0 ||
        enteredValor.trim().length <= 0
    ) {
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredItem + ': $' +enteredValor;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredValor;
    totalExpensesOutput.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear);