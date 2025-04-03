import React from "react";
import '../styles/Contact.css';
import { useState, useEffect } from 'react';
import Modal from "../components/ConversationModal";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        useEffect(() => {
            gsap.utils.toArray(".slide-in").forEach((el: any) => {
                gsap.fromTo(el,
                    { x: -100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            toggleActions: "play none none none",
                        }
                    }
                );
            });
        }, []);
    

    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    const openModal = () => setModalOpen(true); // Function to open modal
    const closeModal = () => setModalOpen(false); // Function to close modal
    return (
        <>
            <section className="contact-container slide-in">
                <h5 className="contact-sub-heading slide-in">Get in touch for a free consultaition</h5>
                <h1 className="contact-heading slide-in">
                    Lets Connect
                </h1>
                <button className="convo-contact-button slide-in" onClick={openModal}>
                    Start a Conversation
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <p className="contact-text slide-in">
                    Have a project in mind or need a digital upgrade? We’d love to hear from you! Whether you have questions, need a quote, or just want to chat about your vision, we’re here to help. Reach out today, and let’s build something amazing together—without the hefty price tag.
                </p>
            </section>
            <div className="contact-tile-container slide-in">
                <ul className="contact-list slide-in">
                    <li className="contact-tile slide-in">
                        <a href="https://www.facebook.com/josh.askew.71/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook slide-in" aria-hidden="true"></i>
                            <span> - Facebook</span>
                        </a>
                    </li>
                    <li className="contact-tile">
                        <a href="https://github.com/JoshAskew" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter slide-in" aria-hidden="true"></i>
                            <span> - GitHub</span>
                        </a>
                    </li>
                    <li className="contact-tile slide-in">
                        <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>
                            <i className="fa fa-google-plus slide-in" aria-hidden="true"></i>
                            <span> - Gmail</span>
                        </a>
                    </li>
                    <li className="contact-tile slide-in">
                        <a href="https://joshua-askew.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram slide-in" aria-hidden="true"></i>
                            <span> - Portfolio</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Contact;
