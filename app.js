const itemInput = document.querySelector('#input-item');
const valorInput = document.querySelector('#input-valor');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmlBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');

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
});