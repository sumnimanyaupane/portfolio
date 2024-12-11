// src/components/CardGrid.js
import React from 'react';
import './CardGrid.css';


const CardGrid = () => {
  
  const cards = [
    {  title: 'java', description: '  java' },
    {  title: 'javascript', description: ' javascript' },
    {  title: 'HTML/CSS', description: 'HTML/CSS' },
    {  title: 'Database', description: ' Database' },
    {  title: 'Servlet', description: 'servlet' },
    {  title: 'jsp', description: ' jsp' },
  ];

  return (
    <div className="card-grid">  
      <h2>Skills</h2>
      {cards.map((card, index) => (        
        <div className="card" key={index}>
          <div className="card-icon">{card.icon}</div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
