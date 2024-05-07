import { useState, useEffect } from "react";
import { motion as m, AnimatePresence, inView } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import Image from "next/image";

const services_data = [
    {
        title: "Illustration",
        subtitle: "Unlock your creative vision with our top-notch illustration services.",
        text: "Our talented artists bring your ideas to life through stunning visuals, whether it's for branding, storytelling, or design. Let us transform your concepts into captivating illustrations that leave a lasting impression.",
        icon: "brush",
    },
    {
        title: "Concept Art",
        subtitle: "Elevate your projects with our exceptional concept art services.",
        text: "Our skilled artists turn your ideas into vivid, imaginative visuals that breathe life into your vision. Whether it's for games, movies, or any artistic endeavor, trust us to craft striking concept art that fuels your imagination.",
        icon: "palette",
    },
    {
        title: "Content Creation",
        subtitle: "Our content creation services help you tell your story in a compelling way.",
        text: "Whether it's through written content, visual media, or interactive experiences. Let us create content that resonates with your audience and drives your message home.",
        icon: "send",
    },
    {
        title: "Project Management",
        subtitle: "Trust us to manage your project efficiently and effectively, so you can focus on what you do best.",
        text: "We oversee every aspect of your project, ensuring it meets your goals and expectations. Our project management services cover planning, execution, and delivery, providing you with a seamless experience from start to finish.",
        icon: "diversity_2",
    },
];

export default function Section_Services() {
    const [isOnScreen, setIsOnScreen] = useState(false);

    const [activeService, setActiveService] = useState(0);

    const activeServiceData = services_data[activeService];

    const isMobileQuery = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <m.section
            className="Main_Section Section_Services Horizontal_Section No_Gap"
            id="services"
            onViewportEnter={() => {
                setIsOnScreen(true);
            }}
        >
            <AnimatePresence>
                {isOnScreen && (
                    <m.div
                        initial={{ opacity: 0, x: "-50vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        className="Services_Main_Info"
                        key={"Services_Section_Info"}
                    >
                        <div className="Services_Info_Header">
                            <h1 className="Section_Title Black_Text">Services</h1>
                            <h2 className="Section_SubTitle Yellow_Text">Bring Your Ideas to Life</h2>
                        </div>
                        <p className="Section_Paragraph Service_Paragraph Black_Text">
                            Let&apos;s build something extraordinary together - Whether you&apos;re a game studio envisioning a new product or brand
                            seeking to tell a captivating story, we invite you to join us on a creative journey.
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

                        <AnimatePresence mode="wait">
                            {services_data.map((service, index) => {
                                if (index === activeService) {
                                    return (
                                        <m.div
                                            key={service.title}
                                            initial={{ x: "-100vw" }}
                                            animate={{ x: 0 }}
                                            exit={{ x: "-100vw" }}
                                            className="Service_Detail"
                                        >
                                            <h2 className="Service_Detail_Subtitle">{service.subtitle}</h2>
                                            <p className="Service_Detail_Description">{service.text}</p>
                                            <button className="Outlined_Btn Black">Know More</button>
                                        </m.div>
                                    );
                                }
                                return null;
                            })}
                        </AnimatePresence>
                    </m.div>
                )}
            </AnimatePresence>

            <div className="Services_Detail_Info">
                <Image
                    className="Service_Detail_Image"
                    src={"/featured_art/service_image_example_black_full_2.png"}
                    alt=""
                    width={1920}
                    height={1920}
                />
            </div>

            <div className="Section_Background_Img Services_Background"></div>

            {/*<Image className="Section_Background_Img Clear" src={"/featured_art/creative_process.png"} alt="" width={1600} height={700} />*/}
        </m.section>
    );
}
