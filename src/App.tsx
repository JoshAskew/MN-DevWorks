import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudy from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Home from './pages/Home';
import './index.css';
import CustomCursor from './components/CustomCursor';

function App() {
    return (<>
    <CustomCursor />
        <div className="cursor-dot"></div>
        <div className="cursor-outline"></div>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/case" element={<CaseStudy />} />
                <Route path="/case/:id" element={<CaseStudyDetail />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
        </>
    );
}

export default App;
