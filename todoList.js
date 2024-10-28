const todoList = [{
    name: 'wash dishes',
    dueDate: '2024-05-24'
    }, {
        name: 'make dinner',
        dueDate: '2024-05-24'
    }];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="deleteTodoButton js-deleteTodoButton">
                Delete
            </button>`;
        todoListHtml += html;
    });

    document.querySelector('.js-todoList')
        .innerHTML = todoListHtml;

    document.querySelectorAll('.js-deleteTodoButton')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList()
            });
        });
}

document.querySelector('.js-addTodoButton')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-nameInput');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-dueDateInput')
    const dueDate = dateInputElement.value
    
    todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });
    
    inputElement.value = '';

    renderTodoList();
}