const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

 

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskText}<button class="remove">Remover</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

 

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
    }
});