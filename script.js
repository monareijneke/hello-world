// async function postTasks() {
//   const posts = await postData();
//   return posts;
// }
// console.log(postData());

async function getTasks() {
  const tasks = await getData();
  return tasks;
}
console.log(getData());

const addButton = document.querySelector("#addTask");
const checkBox = document.createElement("checkBox");
const label = document.createElement("label");
const inputNewTask = document.querySelector("#taskField");

console.log(inputNewTask);

getData().then(function (data) {
  parent.innerHTML = "";
  data.forEach((tasks) => {
    const child = document.createElement("li");
    const parent = document.querySelector(".tasks");
    child.classList = "listItem";
    child.id = tasks._id;
    child.innerHTML = tasks.description;
    parent.appendChild(child);
  });
});

console.log(getTasks);

const addTaskToList = () => {
  child.appendChild(checkbox);
  child.appendChild(label);
};
addButton.addEventListener("click", postData);
