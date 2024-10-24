import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./page/AuthPage";
// https://study-ihl.tistory.com/89
// https://www.youtube.com/watch?v=LP9Y35D4x_8
// https://graphql.org/blog/2016-05-02-rest-api-graphql-wrapper/#installation
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        {/* 👈 Renders at /app/ */}
        <Route path="/todos"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
