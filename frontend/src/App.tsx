import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLoginPage from "./page/AuthLoginPage";
import AuthPage from "./page/AuthPage";
import MainPage from "./page/MainPage";
import TodoDetailPage from "./page/TodoDetailPage";
import TodoListPage from "./page/TodoListPage";
// https://study-ihl.tistory.com/89
// https://www.youtube.com/watch?v=LP9Y35D4x_8
// https://graphql.org/blog/2016-05-02-rest-api-graphql-wrapper/#installation

//
// https://goddaehee.tistory.com/305
// https://tanstack.com/query/latest/docs/framework/react/overview
// https://recoiljs.org/ko/docs/basic-tutorial/atoms
// https://reactrouter.com/en/main/route/route
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/login" element={<AuthLoginPage />} />
        <Route path="/todos" element={<TodoListPage />} />

        <Route path="/todos/:todoId" element={<TodoDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
