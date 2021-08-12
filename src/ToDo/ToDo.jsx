import { useEffect, useState } from "react";
//import "./index.css";
import { AddItem } from "./Components/AddItem";
import { HeaderUser } from "./Components/Header";
import { TodoList } from "./Components/TodoList";
import { getTodos, deletedItem } from "./Requests";

export const ToDo = () => {
  const [list, setList] = useState([]);
  const [detector, setDetector] = useState({});

  useEffect(() => {
    const updateList = async () => {
      const todos = await getTodos();
      setList(todos);
    };

    updateList();
  }, [detector]);

  const updateDetector = () => {
    setDetector({});
  };
  /* console.log(list);
  console.log(updateDetector); */
  // console.log(todos);
  return (
    <>
      <HeaderUser />
      <AddItem updateDetector={updateDetector} deletedItem={deletedItem} />
      <TodoList list={list} onUpdate={updateDetector} />
    </>
  );
};
