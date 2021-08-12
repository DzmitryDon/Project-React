import { useState } from "react";
import { updateTodo } from "../Requests";

export const ListItem = ({ listItem: { todo, id }, onUpdate }) => {
  const [item, setItem] = useState(todo);

  const handleEdit = async () => {
    const currItemUpdate = { todo: item, completed: false, deleted: false };
    await updateTodo(id, currItemUpdate);
    onUpdate();
  };

  const handleEditDell = async () => {
    const currItemUpdate = { todo: item, completed: false, deleted: true };
    await updateTodo(id, currItemUpdate);
    onUpdate();
  };

  const handleEditCompleted = async () => {
    const currItemUpdate = { todo: item, completed: true, deleted: false };
    await updateTodo(id, currItemUpdate);
    onUpdate();
  };

  function handleEditCheckBox(e) {
    if (e.target.checked) {
      handleEditCompleted();
    } else {
      handleEdit();
    }
  }

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={handleEditDell}> Dell</button>
      <button onClick={handleEdit}> Update</button>

      <label>
        <input
          className="completed-item"
          type="checkbox"
          //onChange={handleEditCheckBox}
          onClick={handleEditCheckBox}
        />
        <span> Выполнено</span>
      </label>
    </div>
  );
};
