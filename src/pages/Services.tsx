import React from "react";
import { useState, useEffect } from 'react';
import '../styles/Services.css';
import Modal from "../components/ConversationModal";
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';

const Services: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    const openModal = () => setModalOpen(true); // Function to open modal
    const closeModal = () => setModalOpen(false); // Function to close modal
    return (
        <>
            <section className="services-container">
                <h5 className="services-sub-heading">Turning Ideas into Digital Realities</h5>
                <h1 className="services-heading">
                    What we do
                </h1>
                <p className="services-text">
                    At  <span className="breakpoint">BreakP<span className="chevron-span">&lt;&gt;</span>int</span>, we specialize in creating custom web solutions tailored to your unique needs. From sleek websites to powerful web apps, our team combines innovative design, cutting-edge technology, and a user-first approach to deliver exceptional digital experiences. We’re here to turn your ideas into impactful online solutions that drive results and elevate your brand.
                </p>

                <button className="convo-button" onClick={openModal}>
                    Start a Conversation
                </button>
                <section className="services-summary">
                    <h2 className="services-summary-heading">Our Services</h2>
                    <p className="services-summary-text">
                        We offer a range of services to help you succeed online. Whether you need a stunning website, a powerful web application, or ongoing support, we’ve got you covered.
                    </p>
                    <div className="services-list">
                        <div className="service-item">
                            <h3 className="service-title">Web Development</h3>
                            <p className="service-description">
                                Custom web solutions tailored to your needs.
                            </p>
                        </div>
                        <div className="service-item">
                            <h3 className="service-title">UI/UX Design</h3>
                            <p className="service-description">
                                Beautiful and intuitive designs for a seamless user experience.
                            </p>
                        </div>
                        <div className="service-item">
                            <h3 className="service-title">E-commerce Solutions</h3>
                            <p className="service-description">
                                Build and grow your online store with our e-commerce expertise.
                            </p>
                        </div>
                        <div className="service-item">
                            <h3 className="service-title">SEO Optimization</h3>
                            <p className="service-description">
                                Improve your visibility and reach your target audience effectively.
                            </p>
                        </div>
                    </div>
                </section>

            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <div className="why-us">
                <div className="core-values-container">
                    <h2 className="core-values-heading">
                        Why <span className="highlight-core">Choose</span> Us?</h2>
                    <p className="core-values-text">
                        Here, we’re more than just developers and designers; we’re passionate creators who are committed to bringing your vision to life. With over 20 years of experience working closely with small businesses and startups, we understand the unique challenges you face. We know what it takes to build something from the ground up and how vital it is for your business to stand out in a crowded digital world.
                    </p>
                </div>
                <div className="core-values-list">
                    <ul className="core-values-list-items">
                        <li className="core-values-list-item">
                            <div className="CV-list-item-header">
                                <BlurOnOutlinedIcon className="blur-icon" />
                                <span>Passion</span>
                            </div>
                            <br /><p className="CV-list-item-text">
                                Our team’s passion for development and design drives everything we do. We don’t just build websites—we craft digital solutions that empower small businesses to thrive online. From the first idea to the final product, we’re with you every step of the way, ensuring that your website not only looks amazing but performs flawlessly. </p>
                        </li>

                        <li className="core-values-list-item"><span className="CV-list-item-header"><BlurOnOutlinedIcon className="blur-icon" />Intimate</span><br></br><p className="CV-list-item-text">
                            We believe in making every project personal. Your business isn’t just another job for us—it’s a partnership. With our hands-on approach, we take the time to truly understand your needs, ensuring that the solutions we create reflect your brand’s unique identity and goals.</p></li>

                        <li className="core-values-list-item"><span className="CV-list-item-header"><BlurOnOutlinedIcon className="blur-icon" />Cost Effective</span><br></br><p className="CV-list-item-text">
                            We pride ourselves on offering competitive pricing without compromising on quality. Whether you're launching your first website or upgrading your existing digital presence, we’re here to create solutions that work for you—at a price that makes sense for your business.</p></li>

                        <li className="core-values-list-item"><span className="CV-list-item-header"><BlurOnOutlinedIcon className="blur-icon" />Partners</span><br></br><p className="CV-list-item-text">
                            Your business isn’t just another project for us; it's a partnership. By choosing us, you’re investing in a team that is dedicated to your success, all while keeping costs affordable. Join the many small businesses and startups we've helped grow, and let’s build something exceptional together.</p></li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Services;
