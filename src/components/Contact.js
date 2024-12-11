
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p className="contact-description">
          {/* text */}
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">📍</div>
            <h3>Address</h3>
            <p>Lalitpur,Imadole</p>
          </div>
          <div className="contact-item">
            <div className="icon">📞</div>
            <h3>Call </h3>
            <p>9812345678</p>
          </div>
          <div className="contact-item">
            <div className="icon">✉️</div>
            <h3>Email </h3>
        <a href="#home">sumnimanyaupane@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
