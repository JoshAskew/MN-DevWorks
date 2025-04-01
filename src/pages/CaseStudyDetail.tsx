import { useParams } from 'react-router-dom';
import '../styles/CaseStudyDetail.css'
import GodFriends from '../assets/GodFriends 2.png';
import Globe from '../assets/Globe.png';
import Skull from '../assets/Skull-tune-forge.png'

const caseStudies = {
    "god-friends": {
        title: "God Friends",
        description: "God Friends is a book by Londa Lundstrom and Sandy Scipioni. Our client approached us to create a clean, professional website for its launch. They wanted a responsive, easy-to-navigate design that showcased the book and its authors while keeping the focus on the content. Built with React, the site delivers a seamless user experience across all devices.",
        image: GodFriends,
        colorimage: "",
        typography: ""
    },
    "globe": {
        title: "Portfolio",
        description: "A case study about the Portfolio project...",
        image: Globe,
        colorimage: "",
        typography: ""
    },
    "skull": {
        title: "Tune Forge",
        description: "A case study about the Skull Forge project...",
        image: Skull,
        colorimage: "",
        typography: ""
    }
};

const CaseStudyDetail = () => {
    const { id } = useParams<{ id: keyof typeof caseStudies }>();
    const study = id ? caseStudies[id] : undefined;

    if (!study) {
        return <h2>Case study not found</h2>;
    }

    return (
        <>
            <section className="case-detail-container">
                <div className="case-detail-content">
                    <h5 className="case-study-sub-heading">Case Study</h5>
                    <h1 className="case-study-heading">
                        {study.title}
                    </h1>
                    <p className="case-study-description">
                        {study.description}
                    </p>
                </div>
                <img src={study.image} alt={study.title} className="case-detail-img" />
            </section>
            
            <section className="case-study-design-container">
                <h2 className="case-study-design-header">Collor Pallete</h2>
                <img src={study.colorimage} className='color-pallete-img' />
                <h2 className="case-study-design-header">Typography</h2>
                <img src={study.typography} className='typography-img' />
            </section>
        </>

    );
};

export default CaseStudyDetail;
