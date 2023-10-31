import React from 'react';
import Book from './components/Book';
import Home from './components/Home';
import Recommend from './components/Recommend';
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
            <Route path="/recommend" element={<Recommend />} />
        </Routes>
    </div>
  );
};

export default App;