const uri = 'api/TodoItems';
let todos = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayitems(data))
        .catch(error => console.error('Unable to get items.', error));
    
}

function addItem() {
    const addNameTextBox = document.getElementById('add-name');

    const item = {
        isComplete: false,
        name: addNameTextBox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addNameTextBox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}