import React, { useState, useEffect, useRef, ReactNode } from "react";

interface DynamicFontSizeProps {
    maxWidth: string;
    defaultFontSize: string;
    children: ReactNode;
    containerClassName?: string;
    textClassName?: string;
}

const DynamicFontSize: React.FC<DynamicFontSizeProps> = ({ maxWidth, defaultFontSize, children, containerClassName, textClassName }) => {
    const [fontSizeValue, setFontSizeValue] = useState(parseFloat(defaultFontSize));

    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const adjustFontSize = () => {
            if (containerRef.current && textRef.current) {
                const containerWidth = containerRef.current.clientWidth;

                // Adjust font size based on container width
                if (textRef.current.scrollWidth > containerWidth) {
                    console.log("Text is too long");
                    // Decrease font size if text overflows container width
                    let fontSize = fontSizeValue;
                    while (textRef.current.scrollWidth > containerWidth && fontSize > 0) {
                        fontSize--; // Decrease font size by 1
                        textRef.current.style.fontSize = `${fontSize}px`;
                    }
                } else {
                    // Increase font size if text fits within container width
                    console.log("Text is too small");
                    let fontSize = fontSizeValue;
                    while (textRef.current.scrollWidth < containerWidth && fontSize < 100) {
                        fontSize++; // Increase font size by 1
                        textRef.current.style.fontSize = `${fontSize}px`;
                    }
                }
            }
        };

        // Call adjustFontSize after component mount
        adjustFontSize();

        // Listen for window resize events to re-adjust font size
        const handleResize = () => {
            adjustFontSize();
        };
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Run once after initial render

    return (
        <div
            className={`dynamic-container ${containerClassName || ""}`}
            style={{ width: "100%", display: "flex", justifyContent: "center", maxWidth: maxWidth }}
            ref={containerRef}
        >
            <p className={`dynamic-text ${textClassName || ""}`} style={{ width: "max-content", textWrap: "nowrap" }} ref={textRef}>
                {children}
            </p>
        </div>
    );
};

export default DynamicFontSize;
