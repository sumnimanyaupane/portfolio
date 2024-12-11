// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="text-container">
        <h1>SUMNIMA NYAUPANE</h1>
        <p>Hello, my name is Sumnima Nyaupane, nice to meet you. I would like to welcome you with my personal portfolio.</p>
      </div>
      <div className="image-container">
        <div className="overlay"></div>
        <img src="Downloads-sumnima.jpg" alt="Sumnima Nyaupane" />
      </div>
    </div>
  );
}

export default Home;
