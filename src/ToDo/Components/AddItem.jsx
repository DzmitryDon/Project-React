import { useState } from "react";
import { addTodo } from "../Requests";

export const AddItem = ({ updateDetector }) => {
  const [item, setItem] = useState("");

  const handleAdd = async () => {
    const currItem = { todo: item, completed: false, deleted: false };
    await addTodo(currItem);
    updateDetector();
  };

  const handleAddEnter = (e) => {
    if (e.charCode === 13) {
      handleAdd();
    }
  };

  const handleInput = (e) => {
    setItem(e.target.value);
  };
  function changeBoxParametr() {}

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={handleInput}
        onKeyPress={handleAddEnter}
      />
      <button onClick={handleAdd}> Add</button>

      <label>
        <input type="checkbox" onChange={changeBoxParametr} />
        <span> Показать удаленнные</span>
      </label>
    </div>
  );
};
