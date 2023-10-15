import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />}></Route> />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
