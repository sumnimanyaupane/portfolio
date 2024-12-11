// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import CardGrid from './components/CardGrid';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <CardGrid />
      <Contact />
     
    </div>
  );
}

export default App;

