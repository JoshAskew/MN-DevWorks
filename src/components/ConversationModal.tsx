import '../styles/ConversationModal.css'; // Import your CSS styles
import Close from '../assets/close.png'; // Import the close image
import BreakPointLogo from '../assets/breakpoint-logo-white.svg'; // Import the logo image

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-left">
                    <h2 className='modal-header'>Lets build your <span className='vision-span'>vision</span> together</h2>
                    <img src={BreakPointLogo} className="logo-md-form" alt="BreakPoint Logo" />
                </div>

                <div className="modal-right">
                    <form action="https://formsubmit.co/Joshua.Askew43@gmail.com"
                        method="POST">
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_next" value="https://breakpointdev.com/success"/>
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
                </div>
                    <button className="close-btn" onClick={onClose}>
                        <img src={Close} alt="Close" />
                    </button>
            </div>
        </div>
    );
};

export default Modal;
