import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "src/pages/LoginPage/LoginPage";
import { Main1} from "src/pages/MyPage/MyPage";
import { Main1_2 } from "./pages/CreatePage/CreatePage";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mypage" element={<Main1 />} />
      <Route path = "/create_box" element = {<Main1_2 />} />
    </Routes>
  );
}

export default App;
