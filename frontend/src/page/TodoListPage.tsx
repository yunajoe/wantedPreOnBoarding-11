import { Button, TextField } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { atom, useRecoilState } from "recoil";
import { todoApi } from "../api/todos";
import TodoList from "../components/TodoList";
import { TodoResponseType } from "../type";
const todoTitle = atom<string>({
  key: "todoTitle",
  default: "",
});

const todoContent = atom<string>({
  key: "todoContent",
  default: "",
});
const todoList = atom<string[]>({
  key: "myTodoList",
  default: [],
});
function TodoListPage() {
  const [title, setTitle] = useRecoilState(todoTitle);
  const [content, setContent] = useRecoilState(todoContent);
  const queryClient = useQueryClient();
  const getTodoListQuery = useQuery({
    queryKey: ["todos"],
    queryFn: todoApi.getTodoList,
  });

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

  const editToMutation = useMutation({
    mutationFn: todoApi.editTodo,
    onSuccess: () => {
      console.log("편집성고옹ㅇ");
    },

    onError: (error) => {
      console.log("error", error);
    },
  });

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  if (getTodoListQuery.isLoading) {
    return <div>로딩듕</div>;
  }

  //  getTodoListQuery?.data 는 무조건 query문에 있는것이고 data는 axios response떄문에 있따

  const todoList: TodoResponseType[] = getTodoListQuery.data?.data || [];

  return (
    <div>
      <h1>TODO작성</h1>
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
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoListPage;
