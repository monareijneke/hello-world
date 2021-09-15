const addButton = document.querySelector("#addTask");
const checkBox = document.createElement("checkBox");
const inputNewTask = document.querySelector("#taskField");
const todoList = document.querySelector(".tasks"); //parent UL
const buttonRemove = document.createElement("button");

console.log("Nog steeds online!!");

//addOpening
var nu = new Date();
var dag = nu.getDate();
var dag2 = (dag < 10 ? "0" : "") + dag;
var maand = nu.getMonth() + 1;
var maand2 = (maand < 10 ? "0" : "") + maand;
var jaar = nu.getYear();
var jaar4 = jaar < 1900 ? jaar + 1900 : jaar;
const opening = "TODO lijst van " + dag2 + "-" + maand2 + "-" + jaar4;
document.querySelector("#datum").innerHTML = opening;

getData();

const addNewToDo = async () => {
  if (inputNewTask.value === "") {
    alert("veld mag niet leeg zijn");
    return;
  }
  const todo = {
    description: inputNewTask.value,
    done: false,
  };
  await postData(todo);
  addToDoToDom();
};

//main addDom function
const addToDoToDom = async () => {
  todoList.innerHTML = "";
  const todos = await getData();
  todos.forEach((task) => {
    // console.log(task.description);
    const child = document.createElement("li");
    const child2Input = document.createElement("input");
    const child2Label = document.createElement("label");
    child.classList = "listItem";
    child.id = task._id;
    child2Input.type = "checkbox";
    child2Input.name = task._id;
    child2Label.innerHTML = task.description;
    buttonRemove.type = "reset";
    buttonRemove.name = task._id;
    child.appendChild(child2Input);
    child.appendChild(child2Label);
    child.appendChild(buttonRemove);
    todoList.appendChild(child);
  });
};

const removeItem = async () => {
  await delData();
  removeItemFromDom();
};

const removeItemFromDom = async () => {
  if (this.name === task.name) {
    remove(this.task);
  }
  await delData();
  return removeItemFromDom;
};
removeItemFromDom();

addButton.addEventListener("click", addNewToDo);
buttonRemove.addEventListener("click", removeItem);
