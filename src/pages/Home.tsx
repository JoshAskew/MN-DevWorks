import React, { useEffect } from 'react';
import BreakPointLogo from '../assets/breakpoint-logo-white.svg';
import '../styles/Home.css';


const CaseStudy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="case-container">
                <h5 className="case-sub-heading">From Concept to Clicks.</h5>
                <img src={BreakPointLogo} className="logo-lg" alt="BreakPoint Logo" />
                <p className="case-text">
                    Explore how we’ve helped businesses and individuals bring their visions to life through innovative design and development. From streamlined user experiences to cutting-edge web applications, our case studies showcase the challenges we tackled, the solutions we engineered, and the results we delivered. Dive into our success stories and see what’s possible when creativity meets technology.
                </p>
            </section>
        </>
    );
};

export default CaseStudy;