import { Button, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { todoApi } from "../api/todos";

function TodoDetailPage() {
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const { todoId } = useParams();
  const navigate = useNavigate();
  const getTodDetailQuery = useQuery({
    queryKey: [`todos/${todoId}`],
    queryFn: () => {
      if (todoId) {
        return todoApi.getTodo(todoId);
      }
      return null;
    },
    enabled: !!todoId,
  });

  const updateTodoQuery = useMutation({
    mutationFn: todoApi.editTodo,
    onSuccess: () => {
      console.log("update가 되었습니다앙ㅇ");
      navigate("/todos");
    },
  });

  const detailData = getTodDetailQuery.data?.data;

  const handleTitleChange = (e: any) => {
    setEditTitle(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setEditContent(e.target.value);
  };

  if (getTodDetailQuery.isLoading) {
    return <h1>로딩중</h1>;
  }

  if (!todoId) {
    return <h1>데이터가 없어요</h1>;
  }

  return (
    <div className="edit_container">
      <h1>TODO편집</h1>
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
          placeholder={detailData.title}
          onChange={handleTitleChange}
          value={editTitle}
        />
        <TextField
          id="outlined-textarea"
          placeholder={detailData.content}
          multiline
          rows={4}
          onChange={handleContentChange}
          value={editContent}
        />
      </div>
      <div className="button_container">
        <Button
          variant="contained"
          onClick={() => {
            updateTodoQuery.mutate({
              id: todoId,
              title: editTitle,
              content: editContent,
            });
            console.log("수정안녕하세여여여");
          }}
        >
          수정하기
        </Button>
        <Button variant="contained">취소하기</Button>
      </div>
    </div>
  );
}

export default TodoDetailPage;
