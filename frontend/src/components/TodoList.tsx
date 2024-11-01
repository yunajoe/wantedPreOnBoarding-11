import { useState } from "react";
import { TodoResponseType } from "../type";
import Todo from "./Todo";

type TodoListProps = {
  todoList: TodoResponseType[];
};

function TodoList({ todoList }: TodoListProps) {
  const [editMode, setIsEditMode] = useState("");

  const handleEdit = (id: string) => {
    setIsEditMode(id);
  };

  return (
    <div>
      {todoList.map((item: TodoResponseType) => {
        return (
          <Todo
            item={item}
            key={item.id}
            editMode={editMode}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
