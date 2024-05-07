import Image from "next/image";
import { motion as m, AnimatePresence, useMotionValue, useTransform, animate, stagger } from "framer-motion";
import { act, useEffect, useRef, useState } from "react";
import { set } from "firebase/database";

import { useSearchParams, useParams } from "next/navigation";

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
    entries: Entry[];
};

type Entry = {
    title: string;
    imgs: string[];
};

const projects_data = [
    {
        title: "Steelworks",
        img: "/projects/steelworks/junkyard_1.jpg",
        entries: [
            {
                title: "Eletrogunner",
                imgs: ["/projects/steelworks/eletrogunner.jpg"],
            },
            {
                title: "Environment - The Claw",
                imgs: ["/projects/steelworks/the_claw.jpg"],
            },
            {
                title: "Environment - Junkyard",
                imgs: ["/projects/steelworks/junkyard_1.jpg"],
            },
            {
                title: "Environment - Desert",
                imgs: ["/projects/steelworks/desert.jpg"],
            },
            {
                title: "Lava Spider",
                imgs: ["/projects/steelworks/lava_spider.jpg"],
            },
            {
                title: "Metal Boar",
                imgs: ["/projects/steelworks/metal_boar.jpg"],
            },
            {
                title: "Smoking Drake",
                imgs: ["/projects/steelworks/smoking_drake.jpg"],
            },
            {
                title: "Water Lizzard",
                imgs: ["/projects/steelworks/water_lizzard.jpg"],
            },
            {
                title: "Baby Water Lizzard",
                imgs: ["/projects/steelworks/baby_water_lizzard_1.jpg"],
            },
        ],
    },
    {
        title: "Skyweaver",
        img: "/projects/skyweaver/elemental_concept_2.jpg",
        entries: [
            {
                title: "Universal Spells - Sky United",
                imgs: ["/projects/skyweaver/universal_spells_sky_united.jpg"],
            },
            {
                title: "Universal Spells - Surging Power",
                imgs: ["/projects/skyweaver/universal_spells_surging_power.jpg"],
            },
            {
                title: "Dark Spells - Invasion",
                imgs: ["/projects/skyweaver/dark_spells_1_invasion.jpg"],
            },
            {
                title: "Dark Spells - Raise Dead",
                imgs: ["/projects/skyweaver/dark_spells_1_raise_dead.jpg"],
            },
            {
                title: "Dark Spells - Corpse Explosion",
                imgs: ["/projects/skyweaver/dark_spells_2_corpse_explosion.jpg"],
            },
            {
                title: "Dark Spells - Toxic Bite",
                imgs: ["/projects/skyweaver/dark_spells_2_toxic_bite.jpg"],
            },
            {
                title: "Earth Spells - Rooted Defences",
                imgs: ["/projects/skyweaver/earth_spells_1_rooted_defences.jpg"],
            },
            {
                title: "Earth Spells - Sprouting",
                imgs: ["/projects/skyweaver/earth_spells_1_sprouting.jpg"],
            },
            {
                title: "Earth Spells - Bark Armor",
                imgs: ["/projects/skyweaver/earth_spells_2_bark_armor.jpg"],
            },
            {
                title: "Earth Spells - Sprouting",
                imgs: ["/projects/skyweaver/earth_spells_2_power_infusion.jpg"],
            },
            {
                title: "Fire Spells - Fire Punch",
                imgs: ["/projects/skyweaver/fire_spells_1_fire_punch.jpg"],
            },
            {
                title: "Fire Spells - Flame Kick",
                imgs: ["/projects/skyweaver/fire_spells_1_flame_kick.jpg"],
            },
            {
                title: "Light Spells - Cycle of Life",
                imgs: ["/projects/skyweaver/light_spells_1_cycle_of_life.jpg"],
            },
            {
                title: "Light Spells - Sunbeam",
                imgs: ["/projects/skyweaver/light_spells_1_sunbeam.jpg"],
            },
            {
                title: "Water Spells - Ice Bolts",
                imgs: ["/projects/skyweaver/water_spells_1_ice_bolts.jpg"],
            },
            {
                title: "Water Spells - Sea Storm",
                imgs: ["/projects/skyweaver/water_spells_1_sea_storm.jpg"],
            },
            {
                title: "Hero Ability - Ada - Empower",
                imgs: ["/projects/skyweaver/hero_ability_ada_empower.jpg"],
            },
            {
                title: "Hero Ability - Boran - Ritualize",
                imgs: ["/projects/skyweaver/hero_ability_boran_ritualize.jpg"],
            },
            {
                title: "Hero Ability - Horik - Vengeance",
                imgs: ["/projects/skyweaver/hero_ability_horik_vengeance.jpg"],
            },
            {
                title: "Hero Ability - Lotus - Enlightened",
                imgs: ["/projects/skyweaver/hero_ability_lotus_enlightened.jpg"],
            },
            {
                title: "Hero Ability - Mai - Gadgeteer",
                imgs: ["/projects/skyweaver/hero_ability_mai_gadgeteer.jpg"],
            },
            {
                title: "Hero Ability - Samya - Teleport",
                imgs: ["/projects/skyweaver/hero_ability_samya_teleport.jpg"],
            },
            {
                title: "Hero Ability - Sitti - Psychomancy",
                imgs: ["/projects/skyweaver/hero_ability_sitti_psychomancy.jpg"],
            },
            {
                title: "Hero Ability - Zoey - Live Fast",
                imgs: ["/projects/skyweaver/hero_ability_zoey_live_fast.jpg"],
            },
            {
                title: "Elementals - Air Scion",
                imgs: ["/projects/skyweaver/elemental_air_scion.jpg"],
            },
            {
                title: "Elementals - Earth Scion",
                imgs: ["/projects/skyweaver/elemental_earth_scion.jpg"],
            },
            {
                title: "Elementals - Fire Scion",
                imgs: ["/projects/skyweaver/elemental_fire_scion.jpg"],
            },
            {
                title: "Elementals - Water Scion",
                imgs: ["/projects/skyweaver/elemental_water_scion.jpg"],
            },
            {
                title: "Elementals - Light Scion",
                imgs: ["/projects/skyweaver/elemental_light_scion.jpg"],
            },
            {
                title: "Elementals - Metal Scion",
                imgs: ["/projects/skyweaver/elemental_metal_scion.jpg"],
            },
            {
                title: "Elementals - Mind Scion",
                imgs: ["/projects/skyweaver/elemental_mind_scion.jpg"],
            },
            {
                title: "Masked Dreamers - Maskling",
                imgs: ["/projects/skyweaver/masked_dreamers_maskling.jpg"],
            },
            {
                title: "Masked Dreamers - Crystal Image",
                imgs: ["/projects/skyweaver/masked_dreamers_crystal_image.jpg"],
            },
            {
                title: "Masked Dreamers - Sentinel",
                imgs: ["/projects/skyweaver/masked_dreamers_sentinel.jpg"],
            },
            {
                title: "Zomboid Horde - Bruteboid",
                imgs: ["/projects/skyweaver/zomboid_horde_bruteboid.jpg"],
            },
            {
                title: "Zomboid Horde - Kingboid",
                imgs: ["/projects/skyweaver/zomboid_horde_kingboid.jpg"],
            },
            {
                title: "Zomboid Horde - Hordeboid",
                imgs: ["/projects/skyweaver/zomboid_horde_hordeboid.jpg"],
            },
            {
                title: "Water Clan - Shell Commander",
                imgs: ["/projects/skyweaver/water_units_shell_commander.jpg"],
            },
            {
                title: "Water Clan - Shellhemoth",
                imgs: ["/projects/skyweaver/water_units_shellhemoth.jpg"],
            },
            {
                title: "Water Clan - Tortugan Shaman",
                imgs: ["/projects/skyweaver/water_units_tortugan_shaman.jpg"],
            },
            {
                title: "Water Clan - Torgugan Fisher",
                imgs: ["/projects/skyweaver/water_units_tortugan_fisher.jpg"],
            },
        ],
    },
];

export default function Section_Projects() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [activeEntry, setActiveEntry] = useState<Entry | null>(null);

    const searchParams = useSearchParams();
    const params = useParams<{ project: string; entry: string }>();
    console.log(params);

    const activeProjectParam = searchParams.get("project");
    const activeEntryParam = searchParams.get("entry");
    console.log(activeProjectParam, activeEntryParam);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    let windowWidth = 0;
    let windowHeight = 0;

    if (typeof window !== "undefined") {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    }

    const imgX = useTransform(mouseX, [0, windowWidth], [50, -50]);
    const imgY = useTransform(mouseY, [0, windowHeight], [-20, 20]);

    useEffect(() => {
        const updateMousePosition = (event: MouseEvent) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);

            console.log(event.clientX, event.clientY);
            console.log(window.innerWidth, window.innerHeight);
            console.log(imgX.get(), imgY.get());
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [mouseX, mouseY, imgX, imgY]);

    return (
        <m.section className="Main_Section No_Gap" id="projects">
            <h1 className="Section_Title" id="projects_title">
                Projects <strong> | Our Greatest Creations</strong>
            </h1>
            <div className="Projects_Container">
                <AnimatePresence mode="popLayout">
                    {activeProject && (
                        <m.div
                            initial={{ y: "-1vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-1vh", opacity: 0 }}
                            className="Project_Entries"
                        >
                            <div className="Entries_Header">
                                <m.button
                                    whileTap={{ scale: 0.97 }}
                                    className="Return_Btn"
                                    onClick={() => {
                                        setActiveProject(null);
                                        setActiveEntry(null);
                                    }}
                                >
                                    <span className="material-icons">arrow_back</span>
                                    Return
                                </m.button>
                                <h2 className="Project_Entries_Title">{activeProject.title}</h2>
                            </div>

                            <AnimatePresence>
                                <m.div
                                    initial={{}}
                                    animate={{
                                        transition: {
                                            staggerChildren: 1,
                                        },
                                    }}
                                    className="Entries_List"
                                >
                                    {activeProject.entries.map((entry, index) => (
                                        <m.div
                                            key={index}
                                            initial={{ y: "-1vh", opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: "-1vh", opacity: 0 }}
                                            className="Project_Entry"
                                            onClick={() => {
                                                setActiveEntry(entry);
                                            }}
                                        >
                                            <h3 className="Project_Entry_Title">{entry.title}</h3>
                                            <div className="Project_Entry_Images">
                                                {entry.imgs.map((img, index) => (
                                                    <Image key={index} className="Project_Entry_Image" src={img} alt="" width={500} height={300} />
                                                ))}
                                            </div>
                                        </m.div>
                                    ))}
                                </m.div>
                            </AnimatePresence>
                        </m.div>
                    )}

                    {activeProject == null &&
                        projects_data.map((project, index) => (
                            <m.div
                                initial={{ y: "-1vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "-1vh", opacity: 0 }}
                                key={index}
                                className="Project_Card"
                                onClick={() => setActiveProject(project)}
                            >
                                <Image className="Project_Card_Main_Img" src={project.img} alt="" width={1600} height={700} />
                                <h2 className="Project_Card_Title">{project.title}</h2>
                                <button className="Project_Card_KnowMore_Btn">
                                    Know More <span className="material-icons">more_horiz</span>
                                </button>
                            </m.div>
                        ))}
                </AnimatePresence>

                <AnimatePresence>
                    {activeEntry && (
                        <m.div
                            initial={{ y: "-1vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-1vh", opacity: 0 }}
                            className="Project_Entry_Detail"
                            key={activeEntry.title}
                        >
                            <div className="Project_Entry_Detail_Images">
                                {activeEntry.imgs.map((img, index) => (
                                    <Image
                                        key={index}
                                        className="Project_Entry_Detail_Image"
                                        style={{ transform: `perspective(1000px) rotateX(${imgY}deg) rotateY(${imgX}deg)` }}
                                        src={img}
                                        alt=""
                                        width={1600}
                                        height={700}
                                    />
                                ))}
                            </div>
                            <div className="Project_Entry_Detail_Header">
                                <button
                                    className="Return_Btn"
                                    onClick={() => {
                                        setActiveEntry(null);
                                    }}
                                >
                                    <span className="material-icons">arrow_back</span>Return
                                </button>

                                <h3 className="Project_Entry_Detail_Title">{activeEntry.title}</h3>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </div>
        </m.section>
    );
}
