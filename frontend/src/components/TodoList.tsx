import { Button } from "@mui/material";
import { useState } from "react";
import { TodoResponseType } from "../type";
import { upOrderList } from "../utils/todo";
import Todo from "./Todo";
import "./TodoList.css";

type TodoListProps = {
  todoList: TodoResponseType[];
};

function TodoList({ todoList }: TodoListProps) {
  const [checkValue, setCheckValue] = useState("");
  const [checkInputArr, setCheckInputArr] = useState<[] | number[]>([]);
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
  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    targetIndex: number
  ) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckInputArr((prev) => {
        return [...prev, targetIndex];
      });
    } else {
      setCheckInputArr((prev) => {
        const result = prev.filter((item) => item !== targetIndex);
        return result;
      });
    }
  };

  console.log("todoList", todoList);
  console.log("checkInputArr", checkInputArr);
  upOrderList(todoList, checkInputArr);
  // upOrderList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], checkInputArr);
  return (
    <div className="container">
      <div className="sort_button_container">
        <Button variant="contained">순서올리기</Button>
        <Button variant="contained">순서내리기</Button>
      </div>

      <div className="todo_list">
        {todoList.map((item: TodoResponseType, index: number) => {
          return (
            <Todo
              index={index}
              item={item}
              key={item.id}
              editMode={editMode}
              handleEdit={handleEdit}
              checkValue={checkValue}
              setCheckValue={setCheckValue}
              checkInputArr={checkInputArr}
              setCheckInputArr={setCheckInputArr}
              handleChangeValue={handleChangeValue}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
