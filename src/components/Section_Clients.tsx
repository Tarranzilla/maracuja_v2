import { useEffect, useState, useRef } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Client_Data = {
    name: string;
    img: string;
    review: {
        text: string;
        author: string;
    };
};

const clients_data = [
    {
        name: "Bethesda",
        img: "/partners/bethesda_logo_200.png",
        review: {
            text: "Maracujá Studio is a team of talented artists who consistently deliver high-quality work. They are professional, reliable, and a pleasure to work with. I highly recommend them for any creative project.",
            author: "John Carmack, Bethesda",
        },
    },
    {
        name: "Blizzard",
        img: "/partners/blizzard_logo_200.png",
        review: {
            text: "Working with Maracujá Studio has been a fantastic experience. Their creativity and attention to detail are unmatched. I look forward to collaborating with them on future projects.",
            author: "Mike Morhaime, Blizzard",
        },
    },
    {
        name: "Lucasarts",
        img: "/partners/lucasarts_logo_200.png",
        review: {
            text: "Maracujá Studio brings a fresh perspective to every project. Their ability to weave compelling narratives into stunning visuals is truly impressive. I can't recommend them enough.",
            author: "George Lucas, Lucasarts",
        },
    },
    {
        name: "Riot",
        img: "/partners/riot_logo_200.png",
        review: {
            text: "We've had the pleasure of collaborating with Maracujá Studio on multiple occasions. Their professionalism and creativity shine through in everything they do. They are a valuable partner for any creative endeavor.",
            author: "Marc Merrill, Riot",
        },
    },
    {
        name: "Sony",
        img: "/partners/sony_logo_200.png",
        review: {
            text: "Maracujá Studio consistently delivers exceptional work that exceeds expectations. Their dedication to storytelling and artistic excellence is evident in every project. It's been a pleasure working with them.",
            author: "Shuhei Yoshida, Sony",
        },
    },
    {
        name: "Ubisoft",
        img: "/partners/ubisoft_logo_200.png",
        review: {
            text: "Collaborating with Maracujá Studio has been a highlight for our team. Their innovative ideas and commitment to quality have made our projects stand out. I highly recommend their creative services.",
            author: "Yves Guillemot, Ubisoft",
        },
    },
    {
        name: "Valve",
        img: "/partners/valve_logo_200.png",
        review: {
            text: "Maracujá Studio is a team of exceptionally talented artists and storytellers. They bring a fresh perspective to every project and consistently deliver outstanding results. It's been a pleasure partnering with them.",
            author: "Gabe Newell, Valve",
        },
    },
];

export default function Section_Clients() {
    const [activeClient, setActiveClient] = useState<Client_Data>(clients_data[0]);

    useEffect(() => {}, []);

    return (
        <m.section className="Main_Section" id="our-clients" onViewportEnter={() => {}} onViewportLeave={() => {}}>
            <div className="Section_Detail_Info">
                <div className="Partners_Scroller InvertedAnimation">
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/bethesda_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/blizzard_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/lucasarts_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/ubisoft_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/bethesda_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/blizzard_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/lucasarts_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>

                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/ubisoft_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/bethesda_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/blizzard_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/lucasarts_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/ubisoft_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/bethesda_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/blizzard_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/lucasarts_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/ubisoft_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card InvertedAnimation">
                        <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                </div>
            </div>

            <div className="Section_Main_Info Clients_Main_Info">
                <div className="clients_info_container">
                    <h1 className="Section_Title LittleSmaller Black_Text" id="clients-title">
                        Our Clients
                    </h1>
                    <h2 className="Section_SubTitle Yellow_Text Bigger">Stating Their Opinions</h2>
                </div>

                <div className="Client_Testimonial_Container">
                    <AnimatePresence>
                        <m.div initial={{}} animate={{}} exit={{}} className="Client_Testimonial_Card">
                            <p className="Client_Testimonial_Text">
                                &quot;Maracujá Studio is a team of talented artists who consistently deliver high-quality work. They are professional,
                                reliable, and a pleasure to work with. I highly recommend them for any creative project.&quot;
                            </p>
                            <h3 className="Client_Testimonial_Author">- John Carmack, Bethesda</h3>
                        </m.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="Section_Detail_Info">
                <div className="Partners_Scroller">
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/bethesda_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/blizzard_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/lucasarts_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/ubisoft_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/bethesda_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/blizzard_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/lucasarts_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>

                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/ubisoft_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/bethesda_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/blizzard_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/lucasarts_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/ubisoft_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/bethesda_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/blizzard_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/lucasarts_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/ubisoft_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                    <div className="Partner_Card">
                        <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                    </div>
                </div>
            </div>
        </m.section>
    );
}
