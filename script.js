const todolist2 = [
  {
    name: "make dinner",
    dueDate: "2024-10-01",
  },
  { name: "make breakfast", dueDate: "2024-10-01" },
];
renderTodoList();
function renderTodoList() {
  let totListHTML = ``;
  for (let i = 0; i < todolist2.length; i++) {
    const todoObject = todolist2[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div> ${name}</div>
    <div> ${dueDate}</div>
     <button onclick = "
        todolist2.splice(${i},1);
        renderTodoList();
        " class="delete-todo-btn">Delete</button>`;
    totListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = totListHTML;
}

function addTodo2() {
  const inputElement = document.querySelector(".js-name-input2");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todolist2.push({
    //  name: name,
    //  dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
