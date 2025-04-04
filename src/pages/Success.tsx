import React, { useEffect } from 'react';
import '../styles/Success.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);


const Success: React.FC = () => {
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
            <section className="success-container slide-in">
                <h5 className="success-sub-heading slide-in">Success! Your message has been sent!</h5>
                <p className="success-text slide-in">
                    Thank you for getting in touch with us! We’ve received your message and appreciate the time you took to share your vision with us.
</p><br/><p className="success-text slide-in">
                    Our team is currently reviewing your submission, and we will get back to you as soon as possible with the next steps. We’re excited about the opportunity to work with you and bring your ideas to life!
</p><br/><p className="success-text slide-in">
                    If you have any immediate questions or additional details to share, feel free to reply to this email.
</p><br/><p className="success-text slide-in">
                    Looking forward to collaborating with you!
</p><br/><p className="success-text slide-in">
                    Best regards,
</p><p className="success-text slide-in">
                    The Breakpoint Team
                </p>
                <Link to="/">
                    <button className="home-btn slide-in">
                        Back to Home
                    </button>
                </Link>
            </section>
        </>
    );
};

export default Success;