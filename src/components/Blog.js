import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./CSS/Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "How to Choose the Right Car for You",
      description:
        "When it comes time to buy a new car, there are a lot of factors to consider. What size car do you need? What features are important to you? And how much can you afford to spend? Here are a few tips to help you choose the right car for you.",
      image: "https://i.imgur.com/MNe9hsZ.png",
    },
    {
      title: "How to Keep Your Car Running Smoothly",
      description:
        "There are a few things you can do to keep your car running smoothly and prevent costly repairs. First, make sure you have regular oil changes. Second, check your tire pressure regularly and inflate your tires to the correct pressure. Third, get your car serviced regularly by a qualified mechanic.",
      image: "https://i.imgur.com/MD8sUw8.jpg",
    },
    {
      title: "How to Save Money on Car Repairs",
      description:
        "Car repairs can be expensive, but there are a few things you can do to save money. First, get multiple estimates from different mechanics. Second, ask about discounts for seniors or members of certain organizations. Third, consider doing some of the repairs yourself if you have the skills and tools.",
      image: "https://i.imgur.com/MNe9hsZ.png",
    },
  ]);

  return (
    <div className="blog">
      <h2>Our Blog</h2>
      <div className="blog-card" key={blog.id}>
        <img src={blog.image} alt={blog.title} />
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <Link to={`/blog/${blog.id}`} className="gsn-button">Learn More</Link>
      </div>
    </div>
  );
};
export default Blog;
