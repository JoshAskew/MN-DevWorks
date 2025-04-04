import { useState } from 'react';
import '../styles/ConversationModal.css'; // Import your CSS styles
import Close from '../assets/close.png'; // Import the close image
import BreakPointLogo from '../assets/breakpoint-logo-white.svg'; // Import the logo image
import SuccessImage from '../assets/SuccessImage.jpg'; // Import your success image

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleFormSubmit = () => {
        setIsSubmitted(true); // Set state to show success message after form submission
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-left">
                    <h2 className='modal-header'>Lets build your <span className='vision-span'>vision</span> together</h2>
                    <img src={BreakPointLogo} className="logo-md-form" alt="BreakPoint Logo" />
                </div>

                <div className="modal-right">
                    {isSubmitted ? (
                        <div className="success-message">
                            <img src={SuccessImage} alt="Success" className='success-img' />
                            <p className='success-message'>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                            <button className='success-close' onClick={onClose}>Close</button>
                        </div>
                    ) : (
                        <form action="https://formsubmit.co/Joshua.Askew43@gmail.com" method="POST" onSubmit={handleFormSubmit}>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_autoresponse" value="Thank you for getting in touch with us! We’ve received your message and appreciate the time you took to share your vision with us.

                            Our team is currently reviewing your submission, and we will get back to you as soon as possible with the next steps. We’re excited about the opportunity to work with you and bring your ideas to life!

                            If you have any immediate questions or additional details to share, feel free to reply to this email.

                            Looking forward to collaborating with you!

                            Best regards,
                            The Breakpoint Team "></input>
                            <p className='modal-p-2'>Fill out the form below to share your details with us, and we’ll get back to you as soon as possible.</p>
                            <p className="required-info">* Indicates required fields</p>
                            <div>
                                <label htmlFor="name">* Your Name</label>
                                <input placeholder='Full Name' type="text" id="name" name="Name" required />
                            </div>
                            <div>
                                <label>* Company name</label>
                                <input placeholder='Company' type="text" id="companyName" name="Company Name" required />
                            </div>
                            <div>
                                <label htmlFor="email">* Email</label>
                                <input placeholder='Valid Email' type="email" id="email" name="Email" required />
                            </div>
                            <div>
                                <label htmlFor="message">* Describe your vision</label>
                                <textarea placeholder='Share your vision with us! Describe your goals, ideas, and any specific details you would like to bring to life.' id="message" name="Vision" required></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    )}
                </div>

                <button className="close-btn" onClick={onClose}>
                    <img src={Close} alt="Close" />
                </button>

            </div>
        </div>
    );
};

export default Modal;
