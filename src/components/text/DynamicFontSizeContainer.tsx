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

    return (
        <div
            className={`dynamic-container ${containerClassName || ""}`}
            style={{ width: "100%", display: "flex", justifyContent: "center", maxWidth: maxWidth }}
        >
            <p>{children}</p>
        </div>
    );
};

export default DynamicFontSize;
