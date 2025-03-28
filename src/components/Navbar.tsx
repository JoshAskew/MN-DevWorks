import { useState, useEffect } from 'react';
import '../styles/Navbar.css'
import HamburgerOpen from '../assets/OpenHamburger.png';
import Close from '../assets/close.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close menu on click (mobile)
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav-container ${hasScrolled ? 'scrolled' : ''}`}>
                <span className="title">MN DevWorks</span>

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <img
                    src={isOpen ? Close : HamburgerOpen}
                    alt={isOpen ? "Close Menu" : "Open Menu"}
                    className="hamburger-icon"
                />
            </div>

            {/* Nav List */}
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                <li>
                    <span onClick={() => scrollToSection('About-Book')} className="nav-link">
                        Home
                    </span>
                </li>
                <li>
                    <span onClick={() => scrollToSection('Authors')} className="nav-link">
                        Reviews
                    </span>
                </li>
                <li>
                    <span onClick={() => scrollToSection('Reviews')} className="nav-link">
                        Services
                    </span>
                </li>
                <li>
                    <span onClick={() => scrollToSection('Connect')} className="nav-link">
                        Galleries
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
