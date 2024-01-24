import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OneGamePage from "./pages/OnegamePage/OneGamePage";
import Aboutpage from "./pages/AboutPage/AboutPage/";
import NavBar from "./components/Navbar/NavBar";
import NewGamePage from "./pages/NewGamePage/NewGamePage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:gameId" element={<OneGamePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/new-game" element={<NewGamePage />} />
      </Routes>
    </div>
  );
}

export default App;
