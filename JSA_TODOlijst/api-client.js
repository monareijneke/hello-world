const url = "http://localhost:3000/";

//get data functions
const getData = async function () {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error");
  }
};

getData();

//Post data function
const postData = async function (todo) {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.log("error");
  }
};

//delete data function
const delData = async function (item) {
  const response = await fetch(`${url}${item}`, {
    method: "DELETE",
  });
  return response;
};

//change data fanction
const putTodo = async (id) => {
  const change = { done: true };
  try {
    await fetch(`${url}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(change),
    });

    // console.log(`${url}${id}`);
  } catch (error) {
    console.log("error: ", error);
  }
};
