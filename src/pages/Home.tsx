import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../components/ConversationModal";
import Mold from '../assets/BreaktheMold.svg'
import Rocks from '../assets/Rocks.png'
import Isolation from '../assets/Isolation_Mode.png'
import RightArrow from '../assets/right-arrow.png'

gsap.registerPlugin(ScrollTrigger);


const CaseStudy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const elements = gsap.utils.toArray(".slide-in");
    
        gsap.fromTo(elements,
            { x: -100, opacity: 0 },
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

    ScrollTrigger.refresh();

    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    const openModal = () => setModalOpen(true); // Function to open modal
    const closeModal = () => setModalOpen(false); // Function to close modal

    return (
        <>
                <div className='home-container slide-in"'>
                    <div className='home-background-container slide-in-right'>
                        <img src={Rocks} alt="Rocks" className="rocks slid-in-right" />
                        <img src={Isolation} alt="Isolation" className="isolation slide-in-right" />
                    </div>
                    <div className='home-heading-container'>
                        <h5
                            className="home-subheading slide-in"
                            style={{
                                backgroundImage: `url(${Mold})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >We Break the Mold of</h5>
                        <h1 className="home-heading slide-in">Web Design //</h1>
                        <h1 className="home-heading slide-in">Development</h1>
                    </div>
                    <div className='home-text-container'>
                        <p className="home-text slide-in">
                            From initial <span className='sketch'>sketch</span> to final launch, we turn your ideas into stunning, pixel perfect websites.
                        </p>
                    </div>
                <button className="work-btn slide-in" onClick={openModal}>
                    Lets Work Together <img src={RightArrow} alt="Arrow" className="arrow" />
                </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
        </>
    );
};

export default CaseStudy;