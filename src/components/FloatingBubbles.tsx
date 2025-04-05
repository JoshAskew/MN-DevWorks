import React, { useEffect } from 'react';
import '../styles/FloatingBubbles.css';

const FloatingBubbles: React.FC = () => {

    

    useEffect(() => {
        const bubbleCount = 10; // Number of bubbles
        const container = document.querySelector('.bubble-container');

        // Create bubble elements dynamically
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            container?.appendChild(bubble);

            // Set random size, position, and animation delay
            const size = Math.random() * 50 + 30; // Size between 30px and 80px
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 10 + 5; // Duration between 5s and 15s
            const animationDelay = Math.random() * 5; // Delay between 0s and 5s

            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.animationDuration = `${animationDuration}s`;
            bubble.style.animationDelay = `${animationDelay}s`;
        }
    }, []);

    return <div className="bubble-container"></div>;
};

export default FloatingBubbles;
