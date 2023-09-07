import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>How to Contact Us</h2>
      <p>Please leave your email and phone number so we can reach you!</p>
      <div className="form">
        <input type="email" placeholder="Please Enter Your E-mail" />
        <input type="text" placeholder="Please Enter Your Phone number" />
        <button>Submit</button>
      </div>
    </div>
  );
};
