import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { TodoResponseType } from "../type";
import { upOrderList } from "../utils/todo";
import Todo from "./Todo";
import "./TodoList.css";

type TodoListProps = {
  todoListArr: TodoResponseType[];
  setTodoListArr: Dispatch<SetStateAction<TodoResponseType[] | []>>;
};

function TodoList({ todoListArr, setTodoListArr }: TodoListProps) {
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

  const handleUpOrder = () => {
    const newArr = upOrderList(todoListArr, checkInputArr);
    setTodoListArr([...newArr]);
  };

  return (
    <div className="container">
      <div className="sort_button_container">
        <Button variant="contained" onClick={handleUpOrder}>
          순서올리기
        </Button>
        <Button variant="contained">순서내리기</Button>
      </div>

      <div className="todo_list">
        {todoListArr.map((item: TodoResponseType, index: number) => {
          return (
            <Todo
              index={index}
              item={item}
              key={item.id}
              editMode={editMode}
              handleEdit={handleEdit}
              handleChangeValue={handleChangeValue}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
