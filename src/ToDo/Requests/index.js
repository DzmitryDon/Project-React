const URL = "http://localhost:3033/list";
const USER = "http://localhost:3033/user";

export let deletedItem = false;
export let completedItem = false;

export const addTodo = async (todo) => {
  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
};

export const updateTodo = async (id, todo) => {
  await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
};

export const getTodos = async () => {
  const response = await fetch(URL + "?deleted=false");
  return await response.json();
};

export const getUser = async (name, password) => {
  try {
    console.log(`${USER}/?name=${name}&?password=${password}`);
    const response = await fetch(`${USER}/?name=${name}&?password=${password}`);
    const jsonUser = await response.json();
    return jsonUser[0].id;
  } catch (error) {
    alert("Вы не зарегистрированы!");
    return null;
  }
};
