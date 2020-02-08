const itemInput = document.querySelector('#input-item');
const valorInput = document.querySelector('#input-valor');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmlBtn = document.querySelector('#btn-confirm');

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

    console.log(enteredItem, enteredValor);

});