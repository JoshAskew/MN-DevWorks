import React, { useEffect } from 'react';
import BreakPointLogo from '../assets/breakpoint-logo-white.svg';
import '../styles/Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    return (
        <>
            <section className="case-container slide-in">
                <h5 className="case-sub-heading slide-in">From Concept to Clicks.</h5>
                <img src={BreakPointLogo} className="logo-lg slide-in" alt="BreakPoint Logo" />
                <p className="case-text slide-in">
                    Explore how we’ve helped businesses and individuals bring their visions to life through innovative design and development. From streamlined user experiences to cutting-edge web applications, our case studies showcase the challenges we tackled, the solutions we engineered, and the results we delivered. Dive into our success stories and see what’s possible when creativity meets technology.
                </p>
            </section>
        </>
    );
};

export default CaseStudy;