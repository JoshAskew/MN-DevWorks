import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudy from './pages/CaseStudies';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Home from './pages/Home';
import Success from './pages/Success';
import './index.css';
import CustomCursor from './components/CustomCursor';
import Rainfall from './components/Rainfall';


function App() {
    return (
    <>
    <Rainfall dropCount={50} />
    <CustomCursor />
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/case" element={<CaseStudy />} />
                <Route path="/case/:id" element={<CaseStudyDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/success" element={<Success />} />
            </Routes>
            <Footer />
        </Router>
        </>
    );
}

export default App;
