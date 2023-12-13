import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Appointment from "./components/Appointment";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home />}></Route> />
                <Route path='/termine' exact element={<Appointment />}></Route> />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
