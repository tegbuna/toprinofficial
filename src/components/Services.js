import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./CSS/Services.css";

const Services = () => {
  const [services, setServices] = useState([
    {
      title: "Airbag Module Reset",
      description:
        "We can reset your airbag module so that your car's airbag system is working properly. This is a quick and easy service that can help to keep you safe in the event of an accident.",
      image: "https://i.imgur.com/MNe9hsZ.png",
    },
    {
      title: "Car & Key Programming",
      description:
        "We can program your car's key so that it will start your car and operate all of the car's features. This is a necessary service if you have lost your car key or if you have had your car's ignition switch replaced.",
      image: "https://i.imgur.com/MD8sUw8.jpg",
    },
    {
      title: "Instrument Cluster Repair",
      description:
        "We can repair your car's instrument cluster if it is damaged or malfunctioning. This is a complex service that requires specialized equipment and training.",
      image: "https://i.imgur.com/MD8sUw8.jpg",
    },
  ]);

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-card" key={service.id}>
        <img src={service.image} alt={service.title} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to={`/services/${service.id}`} className="gsn-button">Learn More</Link>
      </div>
    </div>
  );
};
export default Services;
