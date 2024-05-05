import React, { useEffect, useRef } from "react";

interface Card {
    title: string;
    text: string;
    iconName: string;
}

const CardContent = [
    {
        title: "Authenticity",
        text: "Every creation is infused with our unique artistic vision and style.",
        iconName: "fingerprint",
    },
    {
        title: "Autonomy",
        text: "We take ownership of our projects, guiding them from conception to completion with responsibility and dedication.",
        iconName: "auto_mode",
    },
    {
        title: "Attention to Detail",
        text: "We pay meticulous attention to detail, ensuring every element contributes to the overall storytelling experience.",
        iconName: "visibility",
    },
];
