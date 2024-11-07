import { Button, TextField } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { todoApi } from "../api/todos";
import TodoList from "../components/TodoList";
import { TodoResponseType } from "../type";

function TodoListPage() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoListArr, setTodoListArr] = useState<[] | TodoResponseType[]>([]);

  const queryClient = useQueryClient();
  const getTodoListQuery = useQuery({
    queryKey: ["todos"],
    queryFn: todoApi.getTodoList,
  });
  const todoList: TodoResponseType[] = getTodoListQuery.data?.data || [];

  const handleReset = () => {
    setTitle("");
    setContent("");
  };

  const createTodoMutation = useMutation({
    mutationFn: todoApi.createTodo,
    onSuccess: () => {
      getTodoListQuery.refetch();
      handleReset();
    },
  });

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  //  처음에 데이터를 받아와서 init render할떄
  useEffect(() => {
    console.log("이펙트가 호출이 되었습니다");
    setTodoListArr(todoList);
  }, [todoList]);

  // useEffect(() => {
  //   setTodoListArr(todoListArr);
  // }, [todoListArr]);

  if (getTodoListQuery.isLoading) {
    return <div>로딩중</div>;
  }

  // console.log("todoList", todoList);
  console.log("State에 값을 담을 todoList", todoListArr);

  //  getTodoListQuery?.data 는 무조건 query문에 있는것이고 data는 axios response떄문에 있따

  return (
    <div>
      <h1>TODO작성</h1>
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: 20,
          alignItems: "center",
          marginBottom: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "400px",
          }}
        >
          <TextField
            id="filled-basic"
            placeholder="제목"
            onChange={handleTitleChange}
            value={title}
          />
          <TextField
            id="outlined-textarea"
            placeholder="내용"
            multiline
            rows={4}
            onChange={handleContentChange}
            value={content}
          />
        </div>
        <Button
          style={{
            width: "50px",
            height: "50px",
            flexBasis: "200px",
            cursor: "pointer",
          }}
          variant="contained"
          onClick={() => {
            createTodoMutation.mutate({
              title,
              content,
            });
          }}
        >
          todo를 저장합니다
        </Button>
      </div>
      <TodoList todoListArr={todoListArr} setTodoListArr={setTodoListArr} />
    </div>
  );
}

export default TodoListPage;
