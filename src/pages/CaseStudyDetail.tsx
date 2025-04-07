import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/CaseStudyDetail.css'
import GodFriends from '../assets/GodFriends 2.png';
import Globe from '../assets/Globe.png';
import AlineHome from '../assets/AlineHome.png';
import GodColors from '../assets/godfriendscolors.png';
import GodMobile1 from '../assets/GodFriendsMobile1.png';
import GodMobile2 from '../assets/GodFriendsMobile7.png';
import ReactIcon from '../assets/ReactIcon.png';
import ViteIcon from '../assets/ViteIcon.png';
import FormSubmitIcon from '../assets/FormSubmitIcon.png';
import NodeIcon from '../assets/NodeIcon.png';
import ChakraIcon from '../assets/ChakraIcon.png';
import PortfolioColors from '../assets/PortfolioColors.png';
import PortfolioMobile1 from '../assets/PortfolioMobile1.png';
import PortfolioMobile2 from '../assets/PortfolioMobile2.png';
import ExpressIcon from '../assets/ExpressIcon.png';
import MongoIcon from '../assets/MongoIcon.png';
import AlineMobie1 from '../assets/AlineMobile1.png';
import AlineMobile2 from '../assets/AlineMobile2.png';
import AlineColors from '../assets/AlineColors.png';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import LeftArrow from '../assets/left-arrow.png';

gsap.registerPlugin(ScrollTrigger);

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
        description: "We developed a dynamic portfolio website showcasing their skills and projects, built with a modern tech stack to ensure performance and scalability. Leveraging React for a responsive and component-driven front-end, we integrated Chakra UI to craft a sleek, accessible, and visually consistent design system. The development process was streamlined with Vite, enabling lightning-fast builds and an efficient workflow. This portfolio not only highlights our technical expertise but also demonstrates our ability to combine cutting-edge tools to deliver a seamless and engaging user experience.",
        image: Globe,
        colorimage: PortfolioColors,
        typography: PortfolioColors,
        goal: "The goal of our group project was to collaboratively design a professional web developer portfolio that showcases our collective skills, projects, and expertise, while prioritizing accessibility and an exceptional user experience across all devices. The portfolio’s purpose is to provide potential clients and employers with a compelling, cohesive representation of our technical proficiency and creative problem-solving abilities, establishing our credibility as a team in the competitive web development landscape. To enhance engagement, we incorporated subtle animations—such as smooth hover effects, gentle fades for section transitions, and micro-interactions on buttons—to catch the eye and add a layer of polish without overwhelming the user. By ensuring the site is fully responsive across multiple screen sizes—desktops, tablets, and smartphones—we guaranteed seamless functionality and visual consistency, enabling users to explore our work effortlessly on any device. This blend of responsiveness and strategic animation underscores our shared commitment to delivering adaptable, user-focused solutions that captivate and meet diverse needs.",
        goalimg: PortfolioMobile1,
        goalimg2: PortfolioMobile2,
        techstackimg: ReactIcon,
        techstacktext: "React",
        techstack2img: ViteIcon,
        techstack2text: "Vite",
        techstack3img: NodeIcon,
        techstack3text: "Node.js",
        techstack4img: ChakraIcon,
        techstack4text: "Chakra UI"
    },
    "aline": {
        title: "Aline Events",
        description: "Our team built a ticket purchasing app that simplifies event access with a secure database for user data and authentication, ensuring privacy and smooth logins. Integrated with the Ticketmaster API, it offers real-time event browsing and ticket purchasing. The app combines a user-friendly interface with a robust back end for a secure, efficient experience.",
        image: AlineHome,
        colorimage: AlineColors,
        typography: AlineColors,
        goal: "The goal of this case study project was to develop an intuitive event ticket purchasing application that enhances the user experience by integrating the Ticketmaster API for seamless access to a wide range of events. The application allows users to log in securely, browse events, purchase tickets, and save events or tickets of interest for future reference, promoting personalization and convenience. Additionally, we incorporated a weather-checking feature, enabling users to view real-time weather conditions for the event’s location, ensuring they can plan accordingly for a comfortable experience. This holistic approach simplifies the ticket-buying process while providing practical insights, delivering an engaging and user-centric platform tailored to event-goers’ needs.",
        goalimg: AlineMobie1,
        goalimg2: AlineMobile2,
        techstackimg: ReactIcon,
        techstacktext: "React",
        techstack2img: ExpressIcon,
        techstack2text: "Express JS",
        techstack3img: MongoIcon,
        techstack3text: "MongoDB",
        techstack4img: NodeIcon,
        techstack4text: "Node.js"
    }
};

const CaseStudyDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        gsap.utils.toArray(".slide-in").forEach((el: any) => {
            gsap.fromTo(el,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }, []);

    const { id } = useParams<{ id: keyof typeof caseStudies }>();
    const study = id ? caseStudies[id] : undefined;

    if (!study) {
        return <h2>Case study not found</h2>;
    }

    return (
        <>
                <button className="back-button slide-in">
               <img src={LeftArrow} alt="Arrow" className="arrow" />
                    <Link to="/case" className="back-button-text slide-in">Back to Case Studies</Link>
                </button>
            <section className="case-detail-container slide-in">
                <div className="case-detail-content slide-in">
                    <h5 className="case-study-sub-heading slide-in">Case Study</h5>
                    <h1 className="case-study-heading slide-in">
                        {study.title}
                    </h1>
                    <p className="case-study-description slide-in">
                        {study.description}
                    </p>
                </div>
                <img src={study.image} alt={study.title} className="case-detail-img slide-in" />
            </section>

            <section className="case-study-design-container slide-in">
                <div className="design-section slide-in">
                    <h2 className="case-study-design-header slide-in">Color Palette</h2>
                    <img src={study.colorimage} className="color-palette-img slide-in" alt="Color Palette" />
                </div>
                <div className="design-section slide-in">
                    <h2 className="case-study-design-header slide-in">Typography</h2>
                    <img src={study.typography} className="typography-img slide-in" alt="Typography" />
                </div>
            </section>
            

            <h2 className="case-study-tech-header slide-in">Tech Stack</h2>
            <section className="case-study-tech-container slide-in">
                <div className="tech-section slide-in">
                    <div className="tech-item slide-in">
                        <p className="tech-description slide-in">{study.techstacktext}</p>
                        <img src={study.techstackimg} className="tech-image slide-in" />
                    </div>
                    <div className="tech-item slide-in">
                        <p className="tech-description slide-in">{study.techstack2text}</p>
                        <img src={study.techstack2img} className="tech-image slide-in" />
                    </div>
                    <div className="tech-item slide-in">
                        <p className="tech-description slide-in">{study.techstack3text}</p>
                        <img src={study.techstack3img} className="tech-image slide-in" />
                    </div>
                    <div className="tech-item slide-in">
                        <p className="tech-description slide-in">{study.techstack4text}</p>
                        <img src={study.techstack4img} className="tech-image slide-in" />
                    </div>
                </div>
            </section>



            <section className="our-goal-container slide-in">
                <div className="goal-section slide-in">
                    <h2 className="goal-header slide-in">Our Goal</h2>
                    <p className='goal-description v'>
                        {study.goal}
                    </p>
                </div>
                <div className="goal-section image-container slide-in">
                    <img src={study.goalimg} alt="Goal Image" className="goal-img slide-in" />
                    <img src={study.goalimg2} alt="Goal Image" className="goal-img slide-in" />
                </div>
            </section>

        </>

    );
};

export default CaseStudyDetail;
