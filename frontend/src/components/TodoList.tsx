import { useState } from "react";
import { TodoResponseType } from "../type";
import Todo from "./Todo";

type TodoListProps = {
  todoList: TodoResponseType[];
};

function TodoList({ todoList }: TodoListProps) {
  const [editMode, setIsEditMode] = useState({
    editId: "",
    isEdit: false,
  });

  const handleEdit = (id: string) => {
    setIsEditMode((prev) => {
      if (prev.editId === id) {
        return {
          ...prev,
          isEdit: !prev.isEdit,
        };
      }
      return {
        editId: id,
        //  아래처럼 하면은 왜 안되는가
        // isEdit: !prev.isEdit,
        isEdit: true,
      };
    });
  };

  return (
    <div className="container">
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
