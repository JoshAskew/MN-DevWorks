import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/CaseStudies.css';
import GodFriends from '../assets/god-friends.png';
import Portfolio from '../assets/Globe.png';
import Skull from '../assets/Skull-tune-forge.png';

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
                <Link to="/case/god-friends" className="case-study-item">
                    <img src={GodFriends} alt="GodFriends" className="case-study-img" />
                </Link>
                <Link to="/case/globe" className="case-study-item">
                    <img src={Portfolio} alt="Globe" className="case-study-img" />
                </Link>
                <Link to="/case/skull" className="case-study-item">
                    <img src={Skull} alt="Skull" className="case-study-img" />
                </Link>
            </div>
        </>
    );
};

export default CaseStudy;