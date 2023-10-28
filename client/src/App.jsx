import React from 'react';
import Book from './components/Book';
import Home from './components/Home';
//import Reader from './components/Reader';
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Navigation/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
        </Routes>
    </div>
  );
};

export default App;