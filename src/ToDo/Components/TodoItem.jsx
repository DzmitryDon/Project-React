import { useState } from "react";
import { updateTodo } from "../Requests";

export const ListItem = ({ listItem: { todo, id, completed }, onUpdate }) => {
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

  let flagCompleted = null;
  if (completed) {
    flagCompleted = (
      <input
        className="completed-item"
        type="checkbox"
        defaultChecked
        onClick={handleEditCheckBox}
      />
    );
  } else {
    flagCompleted = (
      <input
        className="completed-item"
        type="checkbox"
        onClick={handleEditCheckBox}
      />
    );
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
        {flagCompleted}
        <span> Выполнено </span>
      </label>
    </div>
  );
};
