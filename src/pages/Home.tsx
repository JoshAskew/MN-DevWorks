import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../components/ConversationModal";
import Mold from '../assets/BreaktheMold.svg'
import Rocks from '../assets/Rocks.png'
import Isolation from '../assets/Isolation_Mode.png'

gsap.registerPlugin(ScrollTrigger);


const CaseStudy: React.FC = () => {
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
                <div className='home-container slide-in"'>
                <img src={Rocks} alt="Rocks" className="rocks slide-in" />
                <img src={Isolation} alt="Isolation" className="isolation slide-in" />
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
                </div>
                <button className="work-btn slide-in" onClick={openModal}>
                    Lets Work Together
                </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default CaseStudy;