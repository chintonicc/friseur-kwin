import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Success from "./components/Success";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home />}></Route> />
                <Route path='/termine' exact element={<Appointment />}></Route> />
                <Route path='/success' exact element={<Success />}></Route> />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
