import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;

            // Instantly move the small green dot
            gsap.to(dotRef.current, {
                x: x,
                y: y,
                duration: 0.1, // Moves instantly
            });

            // Make the grey circle lag behind
            gsap.to(outlineRef.current, {
                x: x,
                y: y,
                duration: 0.3, // Creates smooth lag effect
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={outlineRef} className="cursor-outline"></div>
        </>
    );
};

export default CustomCursor;
