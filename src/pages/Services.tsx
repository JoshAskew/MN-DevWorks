import React from "react";
import { useState, useEffect } from 'react';
import '../styles/Services.css';
import Modal from "../components/ConversationModal";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BreakpointIcon from '../assets/BreakpointIcon.svg';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {

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
            <section className="services-container">
                <h5 className="services-sub-heading slide-in">Turning Ideas into Digital Realities</h5>
                <h1 className="services-heading slide-in">
                    What we do
                </h1>
                <p className="services-text slide-in">
                    At  breakpoint, we specialize in creating custom web solutions tailored to your unique needs. From sleek websites to powerful web apps, our team combines innovative design, cutting-edge technology, and a user-first approach to deliver exceptional digital experiences. We’re here to turn your ideas into impactful online solutions that drive results and elevate your brand.
                </p>
                <button className="convo-button slide-in" onClick={openModal}>
                    Start a Conversation
                </button>
                <section className="services-summary">
                    <h2 className="services-summary-heading">Our Services</h2>
                    <p className="services-summary-text slide-in">
                        We offer a range of services to help you succeed online. Whether you need a stunning website, a powerful web application, or ongoing support, we’ve got you covered.
                    </p>
                    <div className="services-list slide-in">
                        <div className="service-item slide-in slide-in">
                            <h3 className="service-title slide-in">Web Development</h3>
                            <p className="service-description slide-in">
                                Custom web solutions tailored to your needs.
                            </p>
                        </div>
                        <div className="service-item slide-in">
                            <h3 className="service-title slide-in">UI/UX Design</h3>
                            <p className="service-description slide-in">
                                Beautiful and intuitive designs for a seamless user experience.
                            </p>
                        </div>
                        <div className="service-item slide-in slide-in">
                            <h3 className="service-title slide-in">E-commerce Solutions</h3>
                            <p className="service-description slide-in">
                                Build and grow your online store with our e-commerce expertise.
                            </p>
                        </div>
                        <div className="service-item slide-in slide-in">
                            <h3 className="service-title slide-in">SEO Optimization</h3>
                            <p className="service-description slide-in">
                                Improve your visibility and reach your target audience effectively.
                            </p>
                        </div>
                    </div>
                </section>

            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <div className="why-us slide-in">
                <div className="core-values-container slide-in">
                    <h2 className="core-values-heading slide-in">
                        Why <span className="highlight-core slide-in">Choose</span> Us?</h2>
                    <p className="core-values-text slide-in">
                        Here, we’re more than just developers and designers; we’re passionate creators who are committed to bringing your vision to life. With over 20 years of experience working closely with small businesses and startups, we understand the unique challenges you face. We know what it takes to build something from the ground up and how vital it is for your business to stand out in a crowded digital world.
                    </p>
                </div>
                <div className="core-values-list slide-in">
                    <ul className="core-values-list-items slide-in">
                        <li className="core-values-list-item slide-in">
                            <div className="CV-list-item-header slide-in">
                                <img src={BreakpointIcon} alt="Breakpoint Icon" className="blur-icon slide-in" />
                                <span>Passion</span>
                            </div>
                            <br /><p className="CV-list-item-text slide-in">
                                Our team’s passion for development and design drives everything we do. We don’t just build websites—we craft digital solutions that empower small businesses to thrive online. From the first idea to the final product, we’re with you every step of the way, ensuring that your website not only looks amazing but performs flawlessly. </p>
                        </li>

                        <li className="core-values-list-item slide-in">
                            <div className="CV-list-item-header slide-in">
                                <img src={BreakpointIcon} alt="Breakpoint Icon" className="blur-icon slide-in" />
                                <span>Intimate</span>
                            </div>
                            <br /><p className="CV-list-item-text slide-in">
                                We believe in making every project personal. Your business isn’t just another job for us—it’s a partnership. With our hands-on approach, we take the time to truly understand your needs, ensuring that the solutions we create reflect your brand’s unique identity and goals. </p>
                        </li>


                        <li className="core-values-list-item slide-in">
                            <div className="CV-list-item-header slide-in">
                                <img src={BreakpointIcon} alt="Breakpoint Icon" className="blur-icon slide-in" />
                                <span className="CV-list-item-header slide-in">Cost Effective</span>
                            </div>
                            <br /><p className="CV-list-item-text slide-in">
                                We pride ourselves on offering competitive pricing without compromising on quality. Whether you're launching your first website or upgrading your existing digital presence, we’re here to create solutions that work for you—at a price that makes sense for your business.</p></li>

                        <li className="core-values-list-item">
                            <div className="CV-list-item-header slide-in">
                                <img src={BreakpointIcon} alt="Breakpoint Icon" className="blur-icon slide-in" />
                                <span className="CV-list-item-header slide-in">Partners</span>
                            </div>
                            <br></br><p className="CV-list-item-text slide-in">
                                Your business isn’t just another project for us; it's a partnership. By choosing us, you’re investing in a team that is dedicated to your success, all while keeping costs affordable. Join the many small businesses and startups we've helped grow, and let’s build something exceptional together.</p></li>
                    </ul>
                </div>
            </div>

            <div className="why-us slide-in">
                <div className="core-values-container slide-in">
                    <h2 className="core-values-heading slide-in">
                        What We Offer</h2>
                    <p className="core-values-text slide-in">
                    From custom-built websites to brand identity and ongoing support, we provide end-to-end digital solutions tailored to your vision. Whether you're launching something new or leveling up what you already have, we’re here to design, build, and grow with you.
                    </p>
                </div>
                <div className="core-values-list slide-in">
                    <ul className="core-values-list-items slide-in">
                        <li className="core-values-list-item slide-in">
                            <div className="CV-list-item-header slide-in">
                                <img src={BreakpointIcon} alt="Breakpoint Icon" className="blur-icon slide-in" />
                                <span>Custom Web Development </span>
                            </div>
                            <br /><p className="CV-list-item-text slide-in">
                                No templates. No one-size-fits-all solutions. We build fully customized websites and web applications tailored to your business, your users, and your goals.

                                Whether you need a dynamic marketing site, an internal dashboard, or a fully-featured web app, we deliver clean, scalable code and intuitive interfaces — all built from the ground up to match your unique vision. What you get: Custom front-end development with modern frameworks (React, Vue, etc.) Scalable, secure back-end architecture (Node.js, Express, MongoDB, etc.) API integrations and third-party services Fully responsive, mobile-first layouts Built-in performance and accessibility best practices</p>

                        </li>

                        <li className="core-values-list-item slide-in">
                            <div className="CV-list-item-header slide-in">
                                <img src={BreakpointIcon} alt="Breakpoint Icon" className="blur-icon slide-in" />
                                <span>Existing Site Update</span>
                            </div>
                            <br /><p className="CV-list-item-text slide-in">
                                Already have a website but need updates? We’ve got you covered. Whether it’s refreshing your design, adding new features, fixing bugs, or improving performance — we work with your current setup to elevate your site without starting from scratch.

                                From small tweaks to full overhauls, we help your site stay modern, functional, and aligned with your evolving business goals. </p>
                        </li>


                        <li className="core-values-list-item slide-in">
                            <div className="CV-list-item-header slide-in">
                                <img src={BreakpointIcon} alt="Breakpoint Icon" className="blur-icon slide-in" />
                                <span className="CV-list-item-header slide-in">Ongoing Maintenance & Support </span>
                            </div>
                            <br /><p className="CV-list-item-text slide-in">
                                Your website doesn’t stop working after launch — and neither do we. We offer ongoing maintenance to keep your site secure, up-to-date, and running smoothly. From regular updates and backups to performance monitoring and quick fixes, we handle the technical details so you can focus on your business.

                                Stay worry-free with reliable support whenever you need it.</p></li>

                        <li className="core-values-list-item">
                            <div className="CV-list-item-header slide-in">
                                <img src={BreakpointIcon} alt="Breakpoint Icon" className="blur-icon slide-in" />
                                <span className="CV-list-item-header slide-in">Branding & Logo Design</span>
                            </div>
                            <br></br><p className="CV-list-item-text slide-in">
                            Your brand is more than just a logo — it’s the first impression, the vibe, and the story you tell. We craft memorable brand identities that reflect who you are and connect with your audience. From logos and color palettes to typography and style guides, we design visuals that are timeless, versatile, and uniquely you.

Stand out with a brand that leaves a lasting mark.<br /> <button className="convo-button2 slide-in " onClick={openModal}>
                                    Start Your Project
                                </button></p></li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Services;
