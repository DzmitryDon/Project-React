import { useState } from "react";

export const AddItem = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleAdd = () => {
    addItem(item);
  };

  const handleInput = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <input type="text" value={item} onChange={handleInput} />
    </div>
  );
};
