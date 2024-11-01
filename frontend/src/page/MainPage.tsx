import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useForceUpdate from "../hooks/useForceUpdate";

function MainPage() {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  const updateFunction = useForceUpdate(token);

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");

    // update 시키는 펑션을 넣는다
    updateFunction();
  };

  const onlyForNotLogin = (
    <>
      <Button variant="contained" onClick={() => navigate("/auth")}>
        회원가입페이지로가기
      </Button>
      <Button variant="contained" onClick={() => navigate("/auth/login")}>
        로그인 페이지로가기
      </Button>
      <Button variant="contained" onClick={() => navigate("/todos")}>
        투두 페이지로가기
      </Button>
    </>
  );

  const onlyForLogin = (
    <>
      <Button variant="contained" onClick={() => navigate("/todos")}>
        투두 페이지로가기
      </Button>
      <Button variant="contained" onClick={handleLogOut}>
        로그아웃
      </Button>
    </>
  );

  return (
    <Stack spacing={2}>
      {!token && onlyForNotLogin}
      {token && onlyForLogin}
    </Stack>
  );
}

export default MainPage;
