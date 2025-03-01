import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Game from "./tic-tac";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <p>
          Welcome to the Tic-Tac-Toe game. This webpage is created by Chang Liu.
          Student Number: 24250295.
        </p>
        <p className="left-align">It is a draw!</p>
      </div>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
