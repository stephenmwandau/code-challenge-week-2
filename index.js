document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');
    const clearListButton = document.getElementById('clearList');

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newItemText = itemInput.value.trim();
        if (newItemText !== '') {
            addItem(newItemText);
            itemInput.value = '';
        }
    });

    clearListButton.addEventListener('click', function() {
        shoppingList.innerHTML = '';
    });

    function addItem(itemText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="itemText">${itemText}</span>
            <button class="purchaseBtn">Purchase</button>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        shoppingList.appendChild(li);

        const purchaseButton = li.querySelector('.purchaseBtn');
        const editButton = li.querySelector('.editBtn');
        const deleteButton = li.querySelector('.deleteBtn');
        const itemTextElement = li.querySelector('.itemText');

        purchaseButton.addEventListener('click', function() {
            purchaseButton.textContent = li.classList.contains('purchased') ? 'Purchase' : 'Purchased';
        });

        editButton.addEventListener('click', function() {
            const newText = prompt('Edit item:', itemTextElement.textContent);
            if (newText !== null && newText.trim() !== '') {
                itemTextElement.textContent = newText.trim();
            }
        });

        deleteButton.addEventListener('click', function() {
            shoppingList.removeChild(li);
        });
    }
});
