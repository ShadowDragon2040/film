import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home';
import Egyfilm from './Egyfilm';
import Ujfilm from './ujFilm';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/ujfilm" element={<Ujfilm/>} exact />
          <Route path="/film/:id" element={<Egyfilm/>} exact />
        </Routes>
    </Router>
  );
}

export default App;
