import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLoginPage from "./page/AuthLoginPage";
import AuthPage from "./page/AuthPage";
import MainPage from "./page/MainPage";
import TodoDetailPage from "./page/TodoDetailPage";
import TodoListPage from "./page/TodoListPage";

//

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
