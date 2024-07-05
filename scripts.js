document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    todoList.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = "\u00d7";
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(removeButton);
        todoList.appendChild(li);
    }
});

const isDarkMode = localStorage.getItem('dark-mode') === 'true';
const body = document.body;

function toggleDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'true');
}

function toggleLightMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'false');
}

if (isDarkMode) {
    toggleDarkMode();
} else {
    toggleLightMode();
}
