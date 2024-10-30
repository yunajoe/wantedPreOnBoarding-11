import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <Stack spacing={2}>
      <Button variant="contained" onClick={() => navigate("/auth")}>
        회원가입페이지로가기
      </Button>
      <Button variant="contained" onClick={() => navigate("/auth/login")}>
        로그인 페이지로가기
      </Button>
      <Button variant="contained" onClick={() => navigate("/todos")}>
        투두 페이지로가기
      </Button>
    </Stack>
  );
}

export default MainPage;
