import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Game from "./tic-tac";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <p>
          Welcome to the Tic-Tac-Toe game. This webpage is created by Chang Liu.
          Student Number: 24250295.
        </p>
      </div>

      <div className="container">
        <div className="game-container">
          <Routes>
            <Route path="/" element={<Game />} />
          </Routes>
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </Router>
  );
}

export default App;
