import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form, TextArea, Button } from "react-bootstrap";
import "./CSS/ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("/contact", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control type="textarea" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
export default ContactUs;
