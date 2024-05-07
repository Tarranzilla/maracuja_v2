import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";
import { act, useEffect, useRef, useState } from "react";

const partners_data = [
    {
        name: "Bethesda",
        img: "/partners/bethesda_logo_200.png",
    },
    {
        name: "Blizzard",
        img: "/partners/blizzard_logo_200.png",
    },
    {
        name: "Lucasarts",
        img: "/partners/lucasarts_logo_200.png",
    },
    {
        name: "Riot",
        img: "/partners/riot_logo_200.png",
    },
    {
        name: "Sony",
        img: "/partners/sony_logo_200.png",
    },
    {
        name: "Ubisoft",
        img: "/partners/ubisoft_logo_200.png",
    },
    {
        name: "Valve",
        img: "/partners/valve_logo_200.png",
    },
];

type Project = {
    title: string;
    img: string;
    entries: {
        title: string;
        imgs: string[];
    }[];
};

const projects_data = [
    {
        title: "Steelworks",
        img: "/projects/steelworks/environment_junkyard_slumillustration_site.jpg",
        entries: [
            {
                title: "Environment Junkyard Slum Illustration",
                imgs: ["/projects/steelworks/environment_junkyard_slumillustration_site.jpg"],
            },
        ],
    },
    {
        title: "Skyweaver",
        img: "/projects/skyweaver/Thumb_14.jpg",
        entries: [
            {
                title: "Environment Junkyard Slum Illustration",
                imgs: ["/projects/steelworks/environment_junkyard_slumillustration_site.jpg"],
            },
        ],
    },
];

export default function Section_Projects() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    return (
        <m.section className="Main_Section No_Gap" id="projects">
            <div className="Projects_Container">
                {activeProject && (
                    <div className="Project_Entries">
                        <div className="Entries_Header">
                            <button
                                onClick={() => {
                                    setActiveProject(null);
                                }}
                            >
                                Return
                            </button>
                            <h2 className="Project_Entries_Title">{activeProject.title}</h2>
                        </div>

                        {activeProject.entries.map((entry, index) => (
                            <div key={index} className="Project_Entry">
                                <h3 className="Project_Entry_Title">{entry.title}</h3>
                                <div className="Project_Entry_Images">
                                    {entry.imgs.map((img, index) => (
                                        <Image key={index} className="Project_Entry_Image" src={img} alt="" width={1600} height={700} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeProject == null &&
                    projects_data.map((project, index) => (
                        <div key={index} className="Project_Card" onClick={() => setActiveProject(project)}>
                            <Image className="Project_Card_Main_Img" src={project.img} alt="" width={1600} height={700} />
                            <h2 className="Project_Card_Title">{project.title}</h2>
                            <button className="Project_Card_KnowMore_Btn">
                                Know More <span className="material-icons">more_horiz</span>
                            </button>
                        </div>
                    ))}
            </div>
        </m.section>
    );
}
