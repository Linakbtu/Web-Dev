const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');


if (todoList.children.length === 0) {
    todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one above!</div>';
}

function createTaskElement(text) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';

    const todoText = document.createElement('span');
    todoText.className = 'todo-text';
    todoText.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = `
        <svg class="delete-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
    `;

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            todoText.classList.add('completed');
        } else {
            todoText.classList.remove('completed');
        }
    });

    deleteButton.addEventListener('click', function() {
        todoItem.remove();

        if (todoList.children.length === 0) {
            todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one above!</div>';
        }
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const emptyState = todoList.querySelector('.empty-state');
    if (emptyState) {
        emptyState.remove();
    }

    createTaskElement(taskText);
    taskInput.value = '';
    taskInput.focus();
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});