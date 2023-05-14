import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form, TextArea, Button } from "react-bootstrap";
import "./CSS/ServiceForm.css";

const ServiceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("service", service);

    fetch("/service", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="service-form">
      <h2>Service Request</h2>
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
        <Form.Group controlId="service">
          <Form.Label>Service</Form.Label>
          <Form.Select onChange={(e) => setService(e.target.value)}>
            <option value="Airbag Module Reset">Airbag Module Reset</option>
            <option value="Car & Key Programming">Car & Key Programming</option>
            <option value="Instrument Cluster Repair">Instrument Cluster Repair</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
export default ServiceForm;
