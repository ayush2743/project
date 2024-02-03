// Variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listener for Add Button
addTask.addEventListener('click', function() {
    // Create task element
    let task = document.createElement('div');
    task.classList.add('task');

    // Create li element
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    // Create check button
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert('Please enter a task!');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = ""; // Clear the input task bar
    
    checkButton.addEventListener('click', function() {
        checkButton.style.backgroundColor = rgba(255, 255, 255, 0.842);
        checkButton.style.color = rgb(239, 67, 107);
    });

    // Event listener for delete button
    deleteButton.addEventListener('click', function() {
        task.remove();
    });
});
