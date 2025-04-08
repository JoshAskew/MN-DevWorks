import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../components/ConversationModal";
import Mold from '../assets/BreaktheMold.svg'
import Rocks from '../assets/Rocks.png'
import RightArrow from '../assets/right-arrow.png'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const Home: React.FC = () => {
    const [dot, setDot] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        // Create and append the dot to the body once
        const dotElement = document.createElement('div');
        dotElement.classList.add('dot');
        dotElement.style.position = 'absolute';
        dotElement.style.width = '8px';
        dotElement.style.height = '3px';
        dotElement.style.backgroundColor = '#61FF7E'; // Bright green color
        dotElement.style.borderRadius = '50%';
        dotElement.style.boxShadow = `
        0 0 10px #61FF7E,
        0 0 20px #61FF7E,
        0 0 30px #61FF7E,
        0 0 40px #61FF7E,
        0 0 50px #61FF7E
      `;

        document.body.appendChild(dotElement);

        setDot(dotElement);

        // Return cleanup function to remove dot on component unmount
        return () => {
            document.body.removeChild(dotElement);
        };
    }, []);

    useEffect(() => {
        const svgElement = document.querySelector('svg');
        const path = svgElement?.querySelectorAll('path')[0]; // Select the first path inside Isolation SVG

        if (path && dot) {
            // Animate the dot along the path
            const animation = gsap.to(dot, {
                motionPath: {
                    path: path,
                    align: path,
                    autoRotate: true,
                    alignOrigin: [0.5, 0.5]
                },
                repeat: -1,
                duration: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".home-container",
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });

            // Update the animation when the window is resized
            const onResize = () => {
                animation.invalidate(); // Invalidate the animation so it recalculates
            };

            window.addEventListener('resize', onResize);

            // Cleanup the resize listener on unmount
            return () => {
                window.removeEventListener('resize', onResize);
                animation.kill(); // Cleanup the GSAP animation when component is unmounted
            };
        }
    }, [dot]);

    useEffect(() => {
        const elements = gsap.utils.toArray(".slide-in");

        gsap.fromTo(elements,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.3, // adjust this value for more or less delay
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

    useEffect(() => {
        ScrollTrigger.refresh();
      }, []);

    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    const openModal = () => setModalOpen(true); // Function to open modal
    const closeModal = () => setModalOpen(false); // Function to close modal

    return (
        <>
            <div className="home-background">
                <div className='home-container slide-in'>
                    <div className='home-background-container slide-in-right'>
                        <img src={Rocks} alt="Rocks" className="rocks slid-in-right" />
                        <svg className='isolation slide-right' width="728" height="648" viewBox="0 0 728 648" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_47)" filter="url(#filter0_d_1_47)">
                                <path d="M280.356 146.795L556.632 130.62L556.632 130.62C618.135 126.96 658.041 194.199 625.442 246.448L477.29 483.835L424.904 394.18L530.356 225.018L530.867 224.198L529.902 224.254L332.386 235.841L280.356 146.795Z" stroke="#61FF7E" />
                                <path d="M395.494 412.25L447.501 501.256L171.225 517.431L171.225 517.431C109.722 521.091 69.8166 453.852 102.416 401.603L101.991 401.338L102.416 401.603L250.491 164.261L302.876 253.916L197.424 423.078L196.913 423.898L197.878 423.842L395.494 412.25Z" stroke="#61FF7E" />
                            </g>
                            <defs>
                                <filter id="filter0_d_1_47" x="-7.15729" y="-7.57915" width="742.172" height="663.209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.380392 0 0 0 0 1 0 0 0 0 0.494118 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_47" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_47" result="shape" />
                                </filter>
                                <clipPath id="clip0_1_47">
                                    <rect width="612" height="392" fill="white" transform="translate(0.842712 309.172) rotate(-30.2978)" />
                                </clipPath>
                            </defs>
                        </svg>
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
                        <h1 className="home-heading slide-in">Web Design And</h1>
                        <h1 className="home-heading slide-in">Development</h1>
                    </div>
                    <div className='home-text-container'>
                        <p className="home-text slide-in">
                            From initial <span className='sketch'>sketch</span> to final launch, we turn your ideas <br></br> into stunning, pixel perfect websites.
                        </p>
                    </div>
                    <div className='button-container'>
                        <button className="work-btn slide-in" onClick={openModal}>
                            Lets Work Together <img src={RightArrow} alt="Arrow" className="arrow" />
                        </button>
                    </div>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
            <section className='mission-container slide-in'>
                <p className='mission-statement slide-in'><span className='mission-span'>our mission</span> is to redefine the digital landscape by delivering innovative, user-centric web designs that empower small businesses to thrive. We commit to pushing creative boundaries and harnessing the latest technologies to provide seamless, dynamic digital solutions that elevate brands and enhance user experiences.</p>
            </section>

            <h1 className='stand-above-h1 slide-in'>WE STAND ABOVE THE REST</h1>
            <section className='stand-above-container'>
                <div className='stand-above-text-container slide-in'>
                    <h2 className='stand-above-header'>
                        DIGITAL EMPOWERMENT
                    </h2>
                    <p className='stand-above-text'>
                        Transform your online presence with our high-performance websites designed to capture and convert your audience. Let us handle the digital heavy lifting, so you can focus on what you do best: growing your business.
                    </p>
                </div>
                <div className='stand-above-text-container slide-in'>
                    <h2 className='stand-above-header'>
                        STREAMLINED SIMPLICITY
                    </h2>
                    <p className='stand-above-text'>
                        Our web designs are clean, intuitive, and engineered to enhance user engagement and satisfaction. Enjoy a hassle-free digital experience that keeps your audience coming back for more.
                    </p>
                </div>
                <div className='stand-above-text-container slide-in'>
                    <h2 className='stand-above-header'>
                        COLLABORATIVE SUCCESS
                    </h2>
                    <p className='stand-above-text'>
                        Together, we'll dive deep into your brand's vision and challenges to create a digital platform that truly resonates. Your success is our success, crafted through a partnership that values transparency and tailored solutions.
                    </p>
                </div>
                <div className='stand-above-text-container slide-in'>
                    <h2 className='stand-above-header'>
                        CREATIVE DIGITAL FRONTIERS
                    </h2>
                    <p className='stand-above-text'>
                        Break away from the mundane with a website uniquely tailored to reflect your brand's personality and goals. We combine creativity with practicality to ensure your digital presence is both beautiful and brilliantly functional.
                    </p>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal} />

        


        </>
    );
};

export default Home;
