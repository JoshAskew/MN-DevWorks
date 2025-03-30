import React from "react";
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <>
    <section className="about-container">
      <h5 className="about-sub-heading">Together, the sky is our limmit.</h5>
      <h1 className="about-heading">
        We are BreakP<span className="chevron-span">&lt;&gt;</span>int
      </h1>
      <p className="about-text">
        We’re a small team of passionate web developers who love bringing ideas to life. Whether it’s a sleek portfolio, a custom web app, or a full-scale business website, we focus on creating fast, modern, and user-friendly experiences. We don’t just build websites—we build solutions that work for you. If you have a vision, we’re here to make it happen. Let’s create something awesome together!
      </p>
      </section>
      <div className="core-values">
        <div className="core-values-container">
          <h2 className="core-values-heading">Our Core Values</h2>
          <p className="core-values-text">
            At the heart of our work is a passion for helping small businesses thrive in the digital world. We know what it’s like to build something from the ground up, and we believe that great web design and development shouldn’t be out of reach for small businesses.
          </p>
        </div>
        <div className="core-values-list">
          <ul className="core-values-list-items">
            <li className="core-values-list-item"><span className="CV-list-item-header">Empowerment</span> We give small businesses the tools they need to succeed online, whether it’s a beautiful website, a seamless user experience, or custom solutions tailored to their goals.</li>
            <li className="core-values-list-item"><span className="CV-list-item-header">Collaboration</span> We work closely with our clients, listening to their needs and turning their vision into reality. Your success is our success.</li>
            <li className="core-values-list-item"><span className="CV-list-item-header">Simplicity & Efficiency</span> A website should work for you, not against you. We build with clean code, intuitive design, and performance in mind.</li>
            <li className="core-values-list-item"><span className="CV-list-item-header">Integrity</span> We believe in transparency, fair pricing, and delivering exactly what we promise—no fluff, no shortcuts.</li>
            <li className="core-values-list-item"><span className="CV-list-item-header">Creativity & Innovation</span> Every business is unique, and we love crafting web experiences that stand out while staying functional and user-friendly.</li>
          </ul>
      </div>
      </div>
      </>
    
  );
};

export default About;
