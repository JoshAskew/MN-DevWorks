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
import MatrixRain from './components/MatrixRain';


function App() {
    return (
    <>
    <MatrixRain />
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
        </Router>
            <Footer />
        </>
    );
}

export default App;
