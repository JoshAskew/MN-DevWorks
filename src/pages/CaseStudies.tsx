import React from "react";
import '../styles/CaseStudies.css';
import GodFriends from '../assets/god-friends.png';
import Globe from '../assets/globe.png';
import Skull from '../assets/Skull-tune-forge.png'
import { useEffect } from 'react';

const CaseStudy: React.FC = () => {
     useEffect(() => {
                window.scrollTo(0, 0);
            }, []);
    return (
        <>
            <section className="case-container">
                <h5 className="case-sub-heading">Case Study: Transforming Ideas into Impactful Digital Solutions</h5>
                <h2 className="case-heading">Case Studies</h2>
                <p className="case-text">
                    Explore how we’ve helped businesses and individuals bring their visions to life through innovative design and development. From streamlined user experiences to cutting-edge web applications, our case studies showcase the challenges we tackled, the solutions we engineered, and the results we delivered. Dive into our success stories and see what’s possible when creativity meets technology.
                </p>
            </section>
            
                <div className="case-study-content">
                    <div className="case-study-item">
                    <img src={GodFriends} alt="GodFriends" className="case-study-img" />
                    <div className="case-study-text case-study-textGF">God Friends</div>
                    </div>
                    <div className="case-study-item">
                    <img src={Globe} alt="Globe" className="case-study-img" />
                    <div className="case-study-text case-study-textP">Portfolio</div>
                    </div>
                    <div className="case-study-item">
                    <img src={Skull} alt="Skull" className="case-study-img" />
                    <div className="case-study-text case-study-textTF">TuneForge</div>
                    </div>
                </div>
            
        </>
    );
};

export default CaseStudy;
