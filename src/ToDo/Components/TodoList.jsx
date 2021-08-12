import { ListItem } from "./TodoItem";

export const TodoList = ({ list, onUpdate }) => {
  //console.log(list);

  return list.map((listItem) => (
    <ListItem key={listItem.id} listItem={listItem} onUpdate={onUpdate} />
  ));
};
