import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import OneGamePage from './pages/OneGamePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:gameId" element={<OneGamePage />} />
      </Routes>
    </div>
  );
}

export default App;
