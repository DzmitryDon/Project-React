const URL = "http://localhost:3033/list";

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
