import React from "react";
import '../styles/Contact.css';
import { useState, useEffect } from 'react';
import Modal from "../components/ConversationModal";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rocks from '../assets/Rocks.png';
import Isolation from '../assets/Isolation_Mode.png';

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
        
        useEffect(() => {
            const elements = gsap.utils.toArray(".slide-in-right");
        
            gsap.fromTo(elements,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.2, // adjust this value for more or less delay
                    scrollTrigger: {
                        trigger: ".home-container", // or any common parent
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, []);
    

    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    const openModal = () => setModalOpen(true); // Function to open modal
    const closeModal = () => setModalOpen(false); // Function to close modal
    return (
        <>
         <div className='home-background-container slide-in-right'>
                        <img src={Rocks} alt="Rocks" className="rocks slid-in-right" />
                        <img src={Isolation} alt="Isolation" className="isolation slide-in-right" />
                    </div>
            <section className="contact-container slide-in">
                <h5 className="contact-sub-heading slide-in">Get in touch for a free consultaition</h5>
                <h1 className="contact-heading slide-in">
                    Lets Connect
                </h1>
                <button className="work-btn slide-in" onClick={openModal}>
                    Start a Conversation
                </button>
                <p className="contact-text slide-in">
                    Have a project in mind or need a digital upgrade? We’d love to hear from you! Whether you have questions, need a quote, or just want to chat about your vision, we’re here to help. Reach out today, and let’s build something amazing together—without the hefty price tag.
                </p>
            </section>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            <div className="slide-in">
                <ul className="contact-list slide-in contact-tile-container">
                    <li className="contact-tile slide-in">
                        <a href="https://www.facebook.com/josh.askew.71/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook slide-in" aria-hidden="true"></i>
                            <span >&lt;&gt; Facebook</span>
                        </a>
                    </li>
                    <li className="contact-tile">
                        <a href="https://github.com/JoshAskew" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter slide-in" aria-hidden="true"></i>
                            <span> &lt;&gt; GitHub</span>
                        </a>
                    </li>
                    <li className="contact-tile slide-in">
                        <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>
                            <i className="fa fa-google-plus slide-in" aria-hidden="true"></i>
                            <span> &lt;&gt; Gmail</span>
                        </a>
                    </li>
                    <li className="contact-tile slide-in">
                        <a href="https://joshua-askew.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram slide-in" aria-hidden="true"></i>
                            <span> &lt;&gt; Portfolio</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Contact;
