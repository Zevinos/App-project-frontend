import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OneGamePage from "./pages/OneGamePage/OneGamePage";
import Aboutpage from "./pages/AboutPage/AboutPage/";
import NavBar from "./components/Navbar/NavBar";
import NewGamePage from "./pages/NewGamePage/NewGamePage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="App">
      <div>
        <NavBar />
      </div>
      <div className="CardList">
        <Routes>
          <Route path="/favorite" element={<FavouritesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:gameId" element={<OneGamePage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/new-game" element={<NewGamePage />} />
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </section>
  );
}

export default App;
