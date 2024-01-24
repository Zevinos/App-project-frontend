import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import OneGamePage from "./pages/OnegamePage/OneGamePage";
import Aboutpage from "./pages/AboutPage/AboutPage/";
import NavBar from "./components/Navbar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:gameId" element={<OneGamePage />} />
        <Route path="/AboutPage" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}

export default App;
