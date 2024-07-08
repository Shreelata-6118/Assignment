const textInputField = document.querySelector('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click', () => {
    if (textInputField.value.trim().length === 0)
        return;

    // Create div and add class todo-item-container
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');
    todosContainer.appendChild(todoItemContainer);

    // Create p element and add id = todo-text
    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);

    // Add double click to todoText
    todoText.addEventListener('dblclick', () => {
        todoText.classList.toggle('line-through');
        editButton.disabled = todoText.classList.contains('line-through');
    });

    
    
    // Create button and add id = edit-button
    const editButton = document.createElement('button');
    editButton.id = 'edit-button';

    // Create img and add to edit button
    const editImage = document.createElement('img');
    editImage.src = 'edit-25.png';
    editButton.appendChild(editImage);
    todoItemContainer.appendChild(editButton);

    // Add click event to edit-button
    editButton.addEventListener('click', () => {
        textInputField.value = todoText.innerText;
        todosContainer.removeChild(todoItemContainer);
    });

    
    
    
    // Create button and add id = delete-button
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';

    // Create img and add it to delete-button
    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete-25.png';
    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);

    // Add click event for deleteButton
    deleteButton.addEventListener('click', () => {
        todosContainer.removeChild(todoItemContainer);
    });

    textInputField.value = "";
});
