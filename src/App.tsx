import React from 'react';

import { Routes, Route } from "react-router-dom"
import './App.css';

import Home from "./pages/Home"
import New from "./pages/New"
import Character from "./pages/Character"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new" element={<New />} />
        <Route path=":name" element={<Character />} />
      </Routes>
    </div>
  );
}



export default App;
