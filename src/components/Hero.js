import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./CSS/Hero.css";

const Hero = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-container hero-container-1" id="hero-text-container">
          <div id="super-title">
            <div>
              Your One-Stop Solution for Automotive Repairs
            </div>
          </div>
          <div className="card-body" id="hero-subtitle">
            <p> At Toprin General, we take pride in our fast, efficient, friendly service.  We use state-of-the-art equipment to provide comprehensive automotive services including airbag module reset, car & key programming, and instrument cluster repair.  Trust us to handle all your vehicle maintenance and repair needs.
            </p>
          </div>
          <div className="hero-button">
            <a href="/" className="gsn-button">Get Started Now</a>
          </div>
        </div>

        <div className="hero-container hero-container-2">
          <img className="hero-image" src="https://i.imgur.com/MD8sUw8.jpg" alt="Illustration of Car  & Services" />
        </div>
      </div>

      <div className="hero-container hero-container-3">
        <div className="hook">
          <Carousel />
        </div>
      </div>

    </div>
  );
};
export default Hero;
