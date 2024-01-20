import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "src/pages/LoginPage/LoginPage";
import { Main1Page } from "src/pages/Main1Page/Main1Page";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main1" element={<Main1Page />} />
    </Routes>
  );
}

export default App;
