//Select DOM Elements

const todoList = document.querySelector(".task-list");
const filterOption = document.querySelector("#filter");
const form = document.querySelector(".form");
const taskInput = document.querySelector("#newitem");

function markDone(todoLi) {
  todoLi.classList.toggle("done");
}
function removeTask(todoLi) {
  todoLi.classList.add("fall");
  todoLi.addEventListener("transitionend", () => todoLi.remove());
}

function filterTask(hideCompletedTasks) {
  todoList.querySelectorAll("li").forEach((todoLi) => {
    if (todoLi.classList.contains("done")) {
      todoLi.style.display = hideCompletedTasks ? "none" : "flex";
    }
  });
}

// Mark task done & Remove Task
todoList.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList[1] === "btn-action-done") {
    markDone(element.parentNode.parentNode);
  } else if (element.classList[1] === "btn-action-delete") {
    removeTask(element.parentNode.parentNode);
  }
});
// Filter tasks
filterOption.addEventListener("click", (event) => {
  filterTask(event.target.checked);
});

// Add a new task
function addTask(taskLabel) {
  const todoLi = document.createElement("li");
  todoLi.innerHTML = `<span class="label">${taskLabel}</span>
  <div class="action">
    <input type="checkbox" class="btn-action btn-action-done" />
    <button class="btn-action btn-action-delete">⨯</button> `;
  todoList.appendChild(todoLi);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskLabel = taskInput.value.trim();
  if (taskLabel) {
    addTask(taskLabel);
    taskInput.value = "";
  }
});
