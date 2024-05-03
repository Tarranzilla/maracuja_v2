import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

import Image from "next/image";

const services_data = [
    {
        title: "Illustration",
        text: "You describe and we draw. Our illustrations are vibrant, dynamic, and full of life.",
        icon: "brush",
    },
    {
        title: "Concept Art",
        text: "We create stunning concept art that sets the tone for your project.",
        icon: "palette",
    },
    {
        title: "Content Creation",
        text: "We craft engaging narratives that captivate and inspire audiences.",
        icon: "send",
    },
    {
        title: "Project Management",
        text: "We oversee every aspect of your project, ensuring it meets your goals and expectations.",
        icon: "diversity_2",
    },
];

export default function Section_Services() {
    const [activeService, setActiveService] = useState(0);

    const activeServiceData = services_data[activeService];

    return (
        <m.section className="Main_Section Section_Services Horizontal_Section" id="services">
            <div className="Services_Main_Info">
                <h1 className="Section_SubTitle Centered_Text">Bring Your Ideas to Life</h1>
                <p className="Section_Paragraph">
                    Let&apos;s build something extraordinary together - Whether you&apos;re a game studio envisioning a new product or brand seeking
                    to tell a captivating story, we invite you to join us on a creative journey.
                </p>

                <div className="Services_Container">
                    <div
                        className={activeService === 0 ? "Service_Btn Active" : "Service_Btn"}
                        onClick={() => {
                            setActiveService(0);
                        }}
                    >
                        <span className="material-icons Service_Icon">brush</span>
                        <h2 className="Service_Title">Illustration</h2>
                    </div>

                    <div
                        className={activeService === 1 ? "Service_Btn Active" : "Service_Btn"}
                        onClick={() => {
                            setActiveService(1);
                        }}
                    >
                        <span className="material-icons Service_Icon">palette</span>
                        <h2 className="Service_Title">Concept Art</h2>
                    </div>

                    <div
                        className={activeService === 2 ? "Service_Btn Active" : "Service_Btn"}
                        onClick={() => {
                            setActiveService(2);
                        }}
                    >
                        <span className="material-icons Service_Icon">send</span>
                        <h2 className="Service_Title">Content Creation</h2>
                    </div>

                    <div
                        className={activeService === 3 ? "Service_Btn Active" : "Service_Btn"}
                        onClick={() => {
                            setActiveService(3);
                        }}
                    >
                        <span className="material-icons Service_Icon">diversity_2</span>
                        <h2 className="Service_Title">Project Management</h2>
                    </div>
                </div>
            </div>
            <div className="Services_Detail_Info">
                <AnimatePresence mode="wait">
                    {services_data.map((service, index) => {
                        if (index === activeService) {
                            return (
                                <m.div
                                    key={service.title}
                                    initial={{ x: "100vw" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100vw" }}
                                    className="Service_Detail"
                                >
                                    <h2 className="Service_Detail_Description">{service.text}</h2>
                                </m.div>
                            );
                        }
                        return null;
                    })}
                </AnimatePresence>
            </div>

            <Image className="Section_Background_Img Clear" src={"/featured_art/creative_process.png"} alt="" width={1600} height={700} />
        </m.section>
    );
}
