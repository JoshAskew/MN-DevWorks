import React from "react";
import { useState } from 'react';
import '../styles/Services.css';
import Modal from "../components/ConversationModal";

const Services: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    const openModal = () => setModalOpen(true); // Function to open modal
    const closeModal = () => setModalOpen(false); // Function to close modal
    return (
        <>
            <section className="services-container">
                <h5 className="services-sub-heading">Turning Ideas into Digital Realities</h5>
                <h1 className="services-heading">
                    What we do
                </h1>
                <p className="services-text">
                    At  <span className="breakpoint">BreakP<span className="chevron-span">&lt;&gt;</span>int</span>, we specialize in creating custom web solutions tailored to your unique needs. From sleek websites to powerful web apps, our team combines innovative design, cutting-edge technology, and a user-first approach to deliver exceptional digital experiences. We’re here to turn your ideas into impactful online solutions that drive results and elevate your brand.
                </p>
          
                    <button className="convo-button" onClick={openModal}>
                        Start a Conversation
                    </button>
               
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default Services;
