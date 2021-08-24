const getOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
};
const dataPost = JSON.stringify({
  description: "taakje een",
  done: false,
});

const postOptions = {
  method: "POST",
  body: dataPost,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
};
const url = "http://localhost:3000/";

const postData = function () {
  const response = fetch(url, postOptions);
  //   console.log(response);
};
// postData();

const getData = async function () {
  const response = await fetch(url, getOptions);
  const result = await response.json();
  console.log(result);
};
getData();

const id = "c978cb23-11fd-48ec-bc77-049c5ea1a0cf";
const todo = { description: "taakje drie" };

const putTodo = async function () {
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

const delData = async function () {
  const response = await fetch(`${url}${id}`, { method: "DELETE" });
};
delData();
