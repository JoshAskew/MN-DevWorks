import '../styles/ConversationModal.css'; // Import your CSS styles
import Close from '../assets/close.png'; // Import the close image

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-left">
                    <h2 className='modal-header'>Lets build your <span className='vision-span'>vision</span> together</h2>
                    <p className='modal-p-1'>BreakP<span className="chevron-span">&lt;&gt;</span>int</p>
                </div>

                <div className="modal-right">
                    <form>
                    <p className='modal-p-2'>Fill out the form below to share your details with us, and we’ll get back to you as soon as possible.</p>
                    <p className="required-info">* Indicates required fields</p>
                        <div>
                            <label htmlFor="name">* Your Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label>* Company name</label>
                            <input type="text" id="companyName" name="companyName" required />
                        </div>
                        <div>
                            <label htmlFor="email">* Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="message">* Describe your vision</label>
                            <textarea id="message" name="message" required></textarea>
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
