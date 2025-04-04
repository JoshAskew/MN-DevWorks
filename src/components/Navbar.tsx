import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Modal from '../components/ConversationModal'; // Import the Modal component
import BreakPointLogo from '../assets/breakpoint-logo-white.svg'; 

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility
    const [isMenuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
    const openModal = () => setModalOpen(true); // Function to open modal
    const closeModal = () => setModalOpen(false); // Function to close modal
    const toggleMenu = () => setMenuOpen(!isMenuOpen); // Function to toggle menu
    const closeMenu = () => setMenuOpen(false); // Function to close menu on link click

    return (
        <nav className='nav-container'>
            <Link to="/">
            <img src={BreakPointLogo} className='logo' />
            </Link>
            <ul className='nav-list'>
                <li>
                    {/* Button to open the modal */}
                    <button className="nav-button" onClick={openModal}>
                        Start a Conversation
                    </button>

                    {/* Menu Toggle Button */}
                    <div id="burger" className={isMenuOpen ? 'open' : ''} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    {/* Menu Overlay */}
                    <nav id="meny" className={isMenuOpen ? 'open' : ''}>
                        <ul>
                            <div className="vertical-menu-label">
                                <span>Menu</span>
                            </div>
                            <li className='menu-item hover-underline'>
                                <Link to="/" onClick={closeMenu}>Home</Link>
                            </li>
                            <li className='menu-item hover-underline'>
                                <Link to="/about" onClick={closeMenu}>About</Link>
                            </li>
                            <li className='menu-item hover-underline'>
                                <Link to="/services" onClick={closeMenu}>Services</Link>
                            </li>
                            <li className='menu-item hover-underline'>
                                <Link to="/case" onClick={closeMenu}>Case Studies</Link>
                            </li>
                            <li className='menu-item hover-underline'>
                                <Link to="/contact" onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                        
                    </nav>
                </li>
            </ul>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </nav>
    );
};

export default Navbar;
