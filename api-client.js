const url = "http://localhost:3000/";
const id = "5a332854-3732-4415-b16d-5afa5e8b4a8d";
const todo = {
  description: inputNewTask.value,
  done: false,
};

//get data functions
const getOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
};

const getData = async function () {
  const response = await fetch(url, getOptions);
  const result = await response.json();
  console.log(result);
};
getData();

//Post data function
const postData = async function (todo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  console.log(response);
};
postData();

//put data functions
const putTodo = async function (todo) {
  const res = await fetch(`${url}${id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
// putTodo();

//delete data function
const delData = async function () {
  const response = await fetch(`${url}${id}`, {
    method: "DELETE",
  });
};
delData();
