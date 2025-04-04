import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;

            gsap.to(dotRef.current, {
                x,
                y,
                duration: 0.1,
            });

            gsap.to(outlineRef.current, {
                x,
                y,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseDown = () => {
            gsap.to(outlineRef.current, {
                scale: 1.5,
                backgroundColor: "#00ff003e", // Match center dot color
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseUp = () => {
            gsap.to(outlineRef.current, {
                scale: 1,
                backgroundColor: "transparent", // Revert to default
                duration: 0.3,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={outlineRef} className="cursor-outline"></div>
        </>
    );
};

export default CustomCursor;
