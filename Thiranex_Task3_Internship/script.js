const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>

            <div class="task-buttons">
                <button class="complete" data-id="${task.id}">
                    ${task.completed ? "Undo" : "Done"}
                </button>

                <button class="edit" data-id="${task.id}">
                    Edit
                </button>

                <button class="delete" data-id="${task.id}">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if(text === "") return;

    tasks.push({
        id: Date.now(),
        text,
        completed:false
    });

    saveTasks();
    renderTasks();
    taskInput.value = "";
});

taskList.addEventListener("click", (e) => {

    const id = Number(e.target.dataset.id);

    if(e.target.classList.contains("delete")) {
        tasks = tasks.filter(task => task.id !== id);
    }

    if(e.target.classList.contains("complete")) {
        tasks = tasks.map(task => {
            if(task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
    }

    if(e.target.classList.contains("edit")) {
        const task = tasks.find(task => task.id === id);

        const newText = prompt("Edit Task", task.text);

        if(newText !== null && newText.trim() !== "") {
            task.text = newText.trim();
        }
    }

    saveTasks();
    renderTasks();
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(button =>
            button.classList.remove("active")
        );

        btn.classList.add("active");

        currentFilter = btn.dataset.filter;

        renderTasks();
    });
});

renderTasks();