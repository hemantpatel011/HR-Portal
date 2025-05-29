import React from "react";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import  Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <>
      <Router>
        <Toaster/>
       <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;