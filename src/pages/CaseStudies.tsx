import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/CaseStudies.css';
import GodFriends from '../assets/god-friends.png';
import Portfolio from '../assets/Globe.png';
import Aline from '../assets/Aline.png';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rocks from '../assets/Rocks.png';
import Isolation from '../assets/Isolation_Mode.png';

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

    return (
        <>
         <div className='home-background-container slide-in-right'>
                        <img src={Rocks} alt="Rocks" className="rocks slid-in-right" />
                        <img src={Isolation} alt="Isolation" className="isolation slide-in-right" />
                    </div>
            <section className="case-container slide-in">
                <h5 className="case-sub-heading slide-in">Case Study: Transforming Ideas into Impactful Digital Solutions</h5>
                <h2 className="case-heading slide-in">Case Studies</h2>
                <p className="case-text slide-in">
                    Explore how we’ve helped businesses and individuals bring their visions to life through innovative design and development. From streamlined user experiences to cutting-edge web applications, our case studies showcase the challenges we tackled, the solutions we engineered, and the results we delivered. Dive into our success stories and see what’s possible when creativity meets technology.
                </p>
            </section>
            
            <div className="case-study-content slide-in">
                <Link to="/case/god-friends" className="case-study-item slide-in">
                    <img src={GodFriends} alt="GodFriends" className="case-study-img" />
                </Link>
                <Link to="/case/globe" className="case-study-item">
                    <img src={Portfolio} alt="Globe" className="case-study-img" />
                </Link>
                <Link to="/case/aline" className="case-study-item slide-in">
                    <img src={Aline} alt="Aline" className="case-study-img" />
                </Link>
            </div>
        </>
    );
};

export default CaseStudy;