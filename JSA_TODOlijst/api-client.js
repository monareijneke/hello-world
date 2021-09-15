const url = "http://localhost:3000/";

//get data functions
const getData = async function () {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const result = await response.json();
  // console.log(result);

  return result; //deze vergeet ik steeds.....
};

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
  return response;
};

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

//delete data function
const delData = async function () {
  const response = await fetch(`${url}${task.name}`, {
    method: "DELETE",
  });
  return response;
};
