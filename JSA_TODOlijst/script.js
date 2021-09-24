async function getTasks() {
  const todos = await getData();
  addToDoToDom(todos);
}
getTasks(); //functie om te starten met een eventueel gevulde lijst

const addButton = document.querySelector("#addTask");
const clearAllBtn = document.querySelector(".clear-all");
const inputNewTask = document.querySelector("#taskField");
const todoList = document.querySelector(".tasks"); //parent UL new

//addDate
let nu = new Date();
let dag = nu.getDate();
let dag2 = (dag < 10 ? "0" : "") + dag;
let maand = nu.getMonth() + 1;
let maand2 = (maand < 10 ? "0" : "") + maand;
let jaar = nu.getYear();
let jaar4 = jaar < 1900 ? jaar + 1900 : jaar;
const opening = "TODO lijst van " + dag2 + "-" + maand2 + "-" + jaar4;
document.querySelector("#datum").innerHTML = opening;
// console.log(Date());

//====FUNCTIONS====//

//main add to Dom function
const addToDoToDom = async () => {
  todoList.innerHTML = "";
  const todos = await getData();
  todos.forEach((task) => {
    const child = document.createElement("li");
    child.classList = "listItem";
    child.id = task._id;
    let newItemLine = " ";
    if (task.done !== true) {
      newItemLine = `<input type="checkbox" class="checkItem">
<label class="unchecked" >${task.description}</label>
<button class="editBtn" type="button" ></button>
<button class="removeBtn" type="button" id=${child.id}></button> `;
    } else {
      newItemLine = `<input type="checkbox" class="checkItem">
  <label class="checked" >${task.description}</label>
  <button class="editBtn" type="button" ></button>
  <button class="removeBtn" type="button" id=${child.id}></button> `;
    }
    child.innerHTML = newItemLine;
    const removeButton = child.querySelector(".removeBtn");
    // const editButton = child.querySelector(".editBtn");
    const checkbox = child.querySelector(".checkItem");
    removeButton.addEventListener("click", removeItem);
    // editButton.addEventListener("click", editItem);
    checkbox.addEventListener("click", checkedItem);
    todoList.appendChild(child); //li aan ul
    addButton.value = "voeg toe";

    // console.log(task.done);
  });
  clearTextField();
};

//clear text field function
const clearTextField = () => {
  inputNewTask.value = "";
};

//add item function
const addNewToDo = async () => {
  if (inputNewTask.value === "") {
    alert("veld mag niet leeg zijn");
    return;
  }
  const todo = {
    description: inputNewTask.value,
    done: false,
  };
  console.log(todo);
  await postData(todo);
  addToDoToDom();
};

//remove item function
const removeItem = async (e) => {
  const item = e.target.parentNode;
  const id = item.id;
  todoList.removeChild(item);
  console.log(id);
  await delData(id);
  return id;
};

//checked function
const checkedItem = async (e) => {
  const item = e.target.nextSibling.nextSibling;
  const status = item.classList[0];
  const id = e.target.parentNode.id;
  // console.log(id);
  if (status === "unchecked") {
    item.classList.remove("unchecked");
    item.classList.add("checked");
  } else {
    item.classList.remove("checked");
    item.classList.add("unchecked");
  }
  // console.log(status);
  putTodo(id);
};

//edit item function
// const editItem = async (e) => {
//   const item = e.currentTarget.previousSibling.previousSibling;
//   inputNewTask.value = item.innerHTML;
//   addButton.value = "wijzig";
//   return item;
// };

// const changeItem = (e) => {
//   const item = e.currentTarget.previousSibling.previousSibling;
//   const changedItem = item.value;
//   console.log(changedItem);
//   putTodo(item);
// };

//===EVENT LISTENERS===//
addButton.addEventListener("click", addNewToDo);
