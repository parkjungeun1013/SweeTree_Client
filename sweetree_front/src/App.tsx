import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "src/pages/LoginPage/LoginPage";
import { MyPage} from "src/pages/MyPage/MyPage";
import { CreatePage} from "./pages/CreatePage/CreatePage";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path = "/create_box" element = {<CreatePage />} />
    </Routes>
  );
}

export default App;
