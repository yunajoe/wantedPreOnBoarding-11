import { useParams } from "react-router-dom";

function TodoDetailPage() {
  const todoId = useParams();
  console.log("todoId", todoId);
  return <div>나는 투두 디테일 페이쥐22222222222</div>;
}

export default TodoDetailPage;
