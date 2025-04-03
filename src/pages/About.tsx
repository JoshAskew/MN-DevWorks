import React from "react";
import '../styles/About.css';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import { useEffect } from 'react';
import BreakPointLogo from '../assets/breakpoint-logo-white.svg';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
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
 
  return (
    <>
      <section className="about-container slide-in">
        <h5 className="about-sub-heading slide-in">Together, the sky is our limit.</h5>
        <h1 className="about-heading slide-in">
          We are <img src={BreakPointLogo} className="logo-md slide-in" alt="BreakPoint Logo" />
        </h1>
        <p className="about-text slide-in">
          We’re a small team of passionate web developers who love bringing ideas to life. Whether it’s a sleek portfolio, a custom web app, or a full-scale business website, we focus on creating fast, modern, and user-friendly experiences. We don’t just build websites—we build solutions that work for you. If you have a vision, we’re here to make it happen. Let’s create something awesome together!
        </p>
      </section>
      <div className="core-values slide-in">
        <div className="core-values-container slide-in">
        <h2 className="core-values-heading slide-in">
  Our <span className="highlight-core slide-in">Core</span> Values</h2>
          <p className="core-values-text slide-in">
            At the heart of our work is a passion for helping small businesses thrive in the digital world. We know what it’s like to build something from the ground up, and we believe that great web design and development shouldn’t be out of reach for small businesses.
          </p>
        </div>
        <div className="core-values-list slide-in">
          <ul className="core-values-list-items slide-in">
            <li className="core-values-list-item slide-in">
              <div className="CV-list-item-header slide-in">
                <BlurOnOutlinedIcon className="blur-icon slide-in" />
                <span>Empowerment</span>
              </div>
              <br /><p className="CV-list-item-text slide-in">
                We believe that every small business deserves a strong online presence. That’s why we focus on creating high-quality, affordable websites that are easy to use and manage. Our goal is to empower you with the tools you need to succeed online, so you can focus on what you do best—running your business.
                We give small businesses the tools they need to succeed online by providing more than just a website—we craft digital experiences that help brands stand out. Whether it’s a visually stunning website that captures your brand identity, a seamless user experience that keeps customers engaged, or custom solutions designed to streamline your business operations, we ensure that every aspect of your online presence works for you. Our goal is to empower small businesses with modern, high-performing websites that not only look great but also drive real results. </p>
            </li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon slide-in" />Collaboration</span><br></br><p className="CV-list-item-text slide-in">
            We work closely with our clients, taking the time to truly understand their goals, challenges, and vision. Every project is a collaboration, where we combine our technical expertise with your unique insights to create something that feels authentic to your brand. From the initial consultation to the final launch, we prioritize open communication, transparency, and flexibility, ensuring that the end result not only meets but exceeds expectations. Your success is our success, and we’re committed to building digital solutions that help your business grow, engage customers, and stand out in a crowded online world.</p></li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon" />Simplicity & Efficiency</span><br></br><p className="CV-list-item-text slide-in">
            A website should be an asset, not a headache. We believe that technology should simplify your workflow, engage your audience, and enhance your brand—not create unnecessary frustration. That’s why we focus on clean, maintainable code that ensures stability and scalability, intuitive design that makes navigation effortless, and optimized performance that keeps load times fast and user interactions smooth. Whether it’s a business website, an e-commerce platform, or a custom web app, we craft digital experiences that work seamlessly across all devices, helping you connect with your audience and achieve your goals without technical roadblocks.</p></li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon slide-in" />Integrity</span><br></br><p className="CV-list-item-text slide-in">
             We believe in doing business the right way—with honesty, integrity, and a commitment to quality. Transparency is at the core of everything we do, from clear communication about project timelines and expectations to upfront, fair pricing with no hidden fees. When we take on a project, we stand by our word, ensuring that every deliverable meets the highest standards. There are no gimmicks, no unnecessary upsells—just reliable, high-quality work that delivers real value. Our goal is to build trust with our clients by providing exactly what we promise, every time.</p></li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon" />Creativity & Innovation</span><br></br><p className="CV-list-item-text slide-in">
             We understand that no two businesses are the same, which is why we take a personalized approach to web development. Our goal is to create digital experiences that reflect your brand’s identity while ensuring seamless functionality and an intuitive user experience. We blend creativity with practicality, designing websites that not only look stunning but also perform efficiently. Whether it’s a bold, cutting-edge design or a sleek, minimalist layout, we make sure your website stands out while remaining easy to navigate, accessible, and optimized for success.</p></li>
          </ul>
        </div>
      </div>



      <section className='process-container slide-in'>
      <div className="core-values slide-in">
        <div className="core-values-container slide-in">
        <h2 className="core-values-heading slide-in">
  Our <span className="highlight-core slide-in">Process</span></h2>
          <p className="core-values-text slide-in">
          At BreakPoint, we believe that a strong digital presence begins with a clear, collaborative process. From the moment you reach out to us until the final launch and beyond, we ensure you’re part of every step, making sure the final product truly represents your vision. Our development process is built to be transparent, efficient, and results-driven, ensuring that we deliver websites that not only look great but also function seamlessly.
          </p>
        </div>
        <div className="core-values-list slide-in">
          <ul className="core-values-list-items slide-in">
            <li className="core-values-list-item slide-in">
              <div className="CV-list-item-header slide-in">
                <BlurOnOutlinedIcon className="blur-icon slide-in" />
                <span>Discovery & Understanding Your Vision</span>
              </div>
              <br /><p className="CV-list-item-text slide-in">
              Every successful project starts with a deep understanding of your needs, goals, and aspirations. We begin by sitting down with you to learn about your business, your target audience, and what you want to achieve through your website. Whether you're launching a brand-new platform or redesigning an existing one, we take the time to understand your objectives. We also work to understand your brand identity, preferred design style, and any technical requirements you may have. This phase is crucial to ensuring that everything we do aligns with your vision and helps us craft a digital strategy tailored to your needs. </p>
            </li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon slide-in" />Strategic Planning & Concept Development</span><br></br><p className="CV-list-item-text slide-in">
            Once we have a clear understanding of your goals, we create a detailed roadmap for the project. During this phase, we outline the design, content, functionality, and technical components that will shape your website. We also establish timelines, budgets, and milestones so that expectations are clear from the start. We work closely with you during this planning phase to ensure that every detail is aligned with your objectives. This is the stage where we begin developing the structure of your site, ensuring it will be both user-friendly and scalable.</p></li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon slide-in" />Wireframing & Prototyping</span><br></br><p className="CV-list-item-text slide-in">
            Now that we have a clear plan in place, we move on to wireframing and prototyping. Here, we create blueprints of your website’s layout, focusing on user flow and design structure. These wireframes are like a rough draft of your website, showing the placement of key elements such as the navigation bar, images, text, and calls-to-action. We also create interactive prototypes that demonstrate how users will interact with your site. At this stage, you'll get the first glimpse of what your website will look like. Your feedback is critical here, and we refine the wireframe until it’s just right.</p></li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon slide-in" />Design & Development</span><br></br><p className="CV-list-item-text slide-in">
            With an approved wireframe in hand, we move on to the design phase. Here, we apply your brand’s visual identity—colors, fonts, logos, and images—into a fully realized design. This is where your website truly starts to come to life. We’ll create high-fidelity mockups that showcase the website’s look and feel, ensuring it’s not only visually appealing but also user-friendly. During this phase, we also begin the development process. Our developers build out the site using clean, maintainable code, ensuring that all of the design elements function perfectly across devices. Whether it’s a content management system (CMS) integration, custom functionality, or e-commerce platform, we handle all the technical aspects with care. We test continuously to make sure the site is responsive, loads quickly, and meets accessibility standards.</p></li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon slide-in" /> Quality Assurance & Testing</span><br></br><p className="CV-list-item-text slide-in">
            Once the website is developed, it undergoes a rigorous quality assurance (QA) phase. During this phase, we test the website across various browsers, devices, and screen sizes to ensure it works flawlessly for all users. We also perform user testing to see how people interact with the site and make sure navigation is intuitive. We check for broken links, performance issues, and optimize load times. Our goal is to catch and address any potential issues before launch, ensuring a smooth user experience for your customers.</p></li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon slide-in" /> Launch & Deployment</span><br></br><p className="CV-list-item-text slide-in">
            After everything is tested and approved, it's time for launch! We deploy your website to the live environment, making sure that all the configurations are correct and the website performs optimally. Before going live, we take care of any final optimizations—SEO best practices, analytics setup, and any final touches that enhance the user experience. After launch, we continue monitoring the site closely to ensure everything runs smoothly, and we’re here to support you if any issues arise.</p></li>

            <li className="core-values-list-item slide-in"><span className="CV-list-item-header slide-in"><BlurOnOutlinedIcon className="blur-icon slide-in" /> Ongoing Support & Maintenance</span><br></br><p className="CV-list-item-text slide-in">
            Launching your website is just the beginning. We believe that a website is a living, breathing entity that needs ongoing attention to thrive. After launch, we offer maintenance and support packages to ensure that your site remains up-to-date, secure, and running at peak performance. Whether it’s regular content updates, performance optimization, security patches, or adding new features, we’ve got you covered.</p></li>
          </ul>
        </div>
      </div>
      </section>
    </>

  );
};

export default About;
