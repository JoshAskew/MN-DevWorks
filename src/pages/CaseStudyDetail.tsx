import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/CaseStudyDetail.css'
import GodFriends from '../assets/GodFriends 2.png';
import Globe from '../assets/Globe.png';
import Skull from '../assets/Skull-tune-forge.png';
import GodColors from '../assets/godfriendscolors.png';
import GodMobile1 from '../assets/GodFriendsMobile1.png';
import GodMobile2 from '../assets/GodFriendsMobile7.png';
import ReactIcon from '../assets/ReactIcon.png';
import ViteIcon from '../assets/ViteIcon.png';
import FormSubmitIcon from '../assets/FormSubmitIcon.png';
import NodeIcon from '../assets/NodeIcon.png';

const caseStudies = {
    "god-friends": {
        title: "God Friends",
        description: "God Friends is a book by Londa Lundstrom and Sandy Scipioni. Our client approached us to create a clean, professional website for its launch. They wanted a responsive, easy-to-navigate design that showcased the book and its authors while keeping the focus on the content. Built with React, the site delivers a seamless user experience across all devices.",
        image: GodFriends,
        colorimage: GodColors,
        typography: GodColors,
        goal: "The goal of this project was to create a simple, user-friendly website for the launch of 'God Friends' by Londa Lundstrom and Sandy Scipioni. The client wanted an intuitive design that would make it easy for users to navigate and focus on the book’s content. A key focus was ensuring a seamless, responsive experience across all devices, allowing users to access the site effortlessly on both desktop and mobile.",
        goalimg: GodMobile1,
        goalimg2: GodMobile2,
        techstackimg: ReactIcon,
        techstacktext: "React",
        techstack2img: ViteIcon,
        techstack2text: "Vite",
        techstack3img: FormSubmitIcon,
        techstack3text: "Form Submit",
        techstack4img: NodeIcon,
        techstack4text: "Node.js"

    },
    "globe": {
        title: "Portfolio",
        description: "A case study about the Portfolio project...",
        image: Globe,
        colorimage: "",
        typography: "",
        goal: "",
        goalimg: '',
        goalimg2: '',
        techstackimg: ReactIcon,
        techstacktext: "",
        techstack2img: "",
        techstack2text: "",
        techstack3img: "",
        techstack3text: "",
        techstack4img: "",
        techstack4text: ""
    },
    "skull": {
        title: "Tune Forge",
        description: "A case study about the Skull Forge project...",
        image: Skull,
        colorimage: "",
        typography: "",
        goal: "",
        goalimg: '',
        goalimg2: '',
        techstackimg: ReactIcon,
        techstacktext: "",
        techstack2img: "",
        techstack2text: "",
        techstack3img: "",
        techstack3text: "",
        techstack4img: "",
        techstack4text: ""
    }
};

const CaseStudyDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                <div className="design-section">
                    <h2 className="case-study-design-header">Color Palette</h2>
                    <img src={study.colorimage} className="color-palette-img" alt="Color Palette" />
                </div>
                <div className="design-section">
                    <h2 className="case-study-design-header">Typography</h2>
                    <img src={study.typography} className="typography-img" alt="Typography" />
                </div>
            </section>
            

            <h2 className="case-study-tech-header">Tech Stack</h2>
            <section className="case-study-tech-container">
                <div className="tech-section">
                    <div className="tech-item">
                        <p className="tech-description">{study.techstacktext}</p>
                        <img src={study.techstackimg} className="tech-image" />
                    </div>
                    <div className="tech-item">
                        <p className="tech-description">{study.techstack2text}</p>
                        <img src={study.techstack2img} className="tech-image" />
                    </div>
                    <div className="tech-item">
                        <p className="tech-description">{study.techstack3text}</p>
                        <img src={study.techstack3img} className="tech-image" />
                    </div>
                    <div className="tech-item">
                        <p className="tech-description">{study.techstack4text}</p>
                        <img src={study.techstack4img} className="tech-image" />
                    </div>
                </div>
            </section>



            <section className="our-goal-container">
                <div className="goal-section">
                    <h2 className="goal-header">Our Goal</h2>
                    <p className='goal-description'>
                        {study.goal}
                    </p>
                </div>
                <div className="goal-section image-container">
                    <img src={study.goalimg} alt="Goal Image" className="goal-img" />
                    <img src={study.goalimg2} alt="Goal Image" className="goal-img" />
                </div>
            </section>

        </>

    );
};

export default CaseStudyDetail;
