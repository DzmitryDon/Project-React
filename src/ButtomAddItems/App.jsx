import { useState } from "react";
import { AddItem } from "./AddItem";
import { Items } from "./Items";

export const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <>
      <AddItem addItem={addItem} />
      <Items items={items} />
    </>
  );
};
