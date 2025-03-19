import React from 'react';
import './styles/contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Email: teamzenith@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
