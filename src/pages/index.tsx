import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m, AnimatePresence, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { useMediaQuery } from "react-responsive";

import Logo from "@/components/brand/Logo";

import Section_Services from "@/components/Section_Services";
import Section_Projects from "@/components/Section_Projects";

import Icon_Artstation from "@/components/icons/Icon_Artstation";
import Icon_Facebook from "@/components/icons/Icon_Facebook";
import Icon_Instagram from "@/components/icons/Icon_Instagram";
import Icon_Twitter from "@/components/icons/Icon_Twitter";
import Icon_Linkedin from "@/components/icons/Icon_Linkedin";
import Icon_Telephone from "@/components/icons/Icon_Telephone";
import Icon_Email from "@/components/icons/Icon_Email";

import DynamicFontSize from "@/components/text/DynamicFontSizeContainer";

export default function Home() {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        container: wrapperRef,
    });

    const isMobileQuery = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const adjustedScrollYProgress = Math.max(0, scrollYProgress.get() - 0.2);
    // Subtract 20% offset
    const [isMobile, setIsMobile] = useState(false);
    const [isAtPageTop, setIsAtPageTop] = useState(true);
    const [isAtSecondPage, setIsAtSecondPage] = useState(false);
    const [isAtThirdPage, setIsAtThirdPage] = useState(false);
    const [isAtFourthPage, setIsAtFourthPage] = useState(false);
    const [isAtFifthPage, setIsAtFifthPage] = useState(false);
    const [isAtSixthPage, setIsAtSixthPage] = useState(false);
    const [isAtSeventhPage, setIsAtSeventhPage] = useState(false);

    const [useSectionDivider, setUseSectionDivider] = useState(false);

    return (
        <>
            <Head>
                <title>Maracujá Studio</title>
                <meta name="description" content="We create what no one expects." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="Main_Wrapper" id="Main_Wrapper" ref={wrapperRef}>
                <div className="InnerWrapper">
                    {/* Seção de Início */}
                    <m.section
                        onViewportEnter={() => {
                            setIsAtPageTop(true);
                        }}
                        onViewportLeave={() => {
                            setIsAtPageTop(false);
                        }}
                        className="Main_Section Section_Intro"
                        id="intro"
                    >
                        <Logo />

                        <m.h2
                            initial={{ opacity: 0, y: "7vh" }}
                            transition={{ delay: 4.5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="Section_Intro_SubTitle"
                        >
                            Outsourcing & Game Development to the Next Level
                        </m.h2>

                        <div className="Top_Decal_Container">
                            <svg className="Top_Decal" viewBox="0 0 1296 1259" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M267.098 348.659C101.868 325.217 8.59601 155.649 0.435117 34.159C-0.859173 14.8911 15.3987 6.3868e-09 34.7101 6.3868e-09H44.3645H1035.5C1267 -0.000976464 1413.91 111.967 1168.5 55C1025.65 21.8402 1047.82 50.53 1087.97 102.482C1134.03 162.093 1203.76 252.332 1075.01 314.901C882.246 408.58 686.916 293.802 613.346 224.703C593.098 213.978 545.109 204.238 515.141 251.077C499.603 275.364 529.618 296.293 573.069 326.588C634.365 369.328 722.399 430.71 746.986 546.462C768.449 647.504 801.007 689.224 826.173 721.47C850.272 752.35 867.591 774.543 861.896 831.824C852.582 925.503 781.409 944 746.986 941.538C708.008 945.758 620.231 935.631 580.949 861.363C547.452 798.032 538.926 814.234 530.141 830.93C526.048 838.708 521.898 846.593 515.141 846.593C495.681 846.593 511.845 891.668 543.448 979.795L543.448 979.796L543.462 979.834C546.382 987.977 549.433 996.487 552.601 1005.36C583.928 1093.15 505.505 1121.17 466.552 1135.08C458.927 1137.81 452.814 1139.99 449.334 1141.98C443.477 1145.32 438.235 1151.58 432.837 1158.03C422.56 1170.3 411.72 1183.25 395.001 1178C376.271 1170.79 383.001 1123.5 473.126 1092.92C550.132 1066.8 523.454 1012.18 496.152 956.277C477.091 917.252 457.725 877.604 473.126 846.593C510.585 771.165 426.71 646.681 290.383 819.692C181.214 958.238 195.924 1020.34 212.095 1088.61C216.118 1105.59 220.232 1122.96 222.551 1141.98C231.865 1218.36 62.9994 1273.92 8.49995 1254C-8.5733 1246.67 6.69832 1241.88 33.9688 1233.33C92.9514 1214.83 208.065 1178.72 173.448 1061.27C110.172 846.593 421.492 646.681 473.126 617.143C524.759 587.604 493.88 380.835 267.098 348.659ZM335.066 322.809C93.9614 207.343 55.501 138.001 59.0011 65.5009C63.5345 33.9009 100.001 18.0009 151.501 18.0009H273.001C300.501 18.0009 374.215 32.2808 313.317 82.7715C271.754 117.232 330.846 147.22 388.095 176.272C435.695 200.428 482.021 223.937 468.151 248.832C447.123 286.572 535.737 343.67 605.189 388.421C636.65 408.693 664.179 426.432 675.803 438.689C705.63 470.142 714.468 508.355 715.159 523.53C709.29 541.809 715.055 605.888 785.067 715.974C866.256 843.637 830.674 859.987 762.258 891.424C756.928 893.873 751.399 896.414 745.711 899.106C667 936.353 592.949 844.787 581.557 796.676C572.443 758.187 553.248 780.639 544.79 796.676C529.428 808.229 498.703 824.404 498.703 796.676C498.703 774.512 483.457 754.674 466.776 732.971C457.372 720.734 447.511 707.904 439.67 693.729C422.27 662.276 471.775 644.411 498.703 639.41C544.618 581.987 576.171 438.275 335.066 322.809ZM406.501 31.5001C369.501 28.5001 343.124 73.0463 366.027 102.008C379.902 119.553 414.559 135.208 446.301 149.546C480.056 164.793 510.513 178.551 509.172 191.508C507.397 208.658 546.102 196.83 575.722 187.778C580.838 186.215 585.683 184.734 590.001 183.5C623.174 180.484 632.953 192.414 647.823 210.555C652.677 216.476 658.072 223.059 665.001 230C725.544 290.65 958.001 352 1049.48 299.611C1126.09 255.736 1129.5 240 1121.83 191.508C1103.48 156.842 1081.91 142.362 1064.72 130.825C1046.95 118.896 1033.86 110.113 1033.86 85.4154C1033.86 51.0626 1003.5 31.4999 972.501 31.4999L480.001 31.5001H406.501Z"
                                    fill="#E4DFCF"
                                />
                            </svg>
                        </div>

                        <div className="Top_Image_Container">
                            {/* 
                                "/projects/steelworks/environment_junkyard_slumillustration_site.jpg" 
                                "/featured_art/eletrogunner_gif.gif"
                            */}
                            <Image
                                className="Top_Image"
                                src={"/projects/steelworks/environment_junkyard_slumillustration_site.jpg"}
                                alt="Studio Maracuja Logo"
                                width={2568}
                                height={590}
                            />
                        </div>
                    </m.section>

                    {/* Sticky Navbar */}
                    <m.div className="Section_Intro_Nav">
                        <AnimatePresence>
                            {!isAtPageTop && (
                                <m.div
                                    initial={{ opacity: 0, x: "-20vw" }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: "-20vw" }}
                                    className="NavLogo"
                                >
                                    <Image
                                        className="NavLogo_Image"
                                        src={"/brand_assets/studiomaracuja_logo-branca.png"}
                                        alt="Studio Maracuja Logo"
                                        width={2568}
                                        height={590}
                                    />
                                </m.div>
                            )}
                        </AnimatePresence>

                        <Link className="Intro_Nav_Link" href="#services">
                            Services
                        </Link>

                        <Link className="Intro_Nav_Link" href="#who">
                            About Us
                        </Link>

                        <Link className="Intro_Nav_Link" href="#projects">
                            Projects
                        </Link>

                        <Link className="Intro_Nav_Link" href="#work-with-us">
                            Work With Us
                        </Link>

                        <Link className="Intro_Nav_Link" href="#contact">
                            Get in Touch!
                        </Link>

                        {/*
                    
                        <Link className="Intro_Nav_Link" href="#shop">
                            Buy Our Art
                        </Link>
                        
                        <Link className="Intro_Nav_Link" href="#team">
                            Meet The Team
                        </Link>

                        */}

                        <AnimatePresence>
                            {!isAtPageTop && (
                                <m.div
                                    initial={{ opacity: 0, x: "20vw" }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: "20vw" }}
                                    className="Nav_Scroll_Top"
                                    onClick={() => {
                                        const wrapper = document.getElementById("Main_Wrapper");
                                        if (wrapper) {
                                            wrapper.scrollTo({ top: 0, behavior: "smooth" });
                                        }
                                    }}
                                >
                                    <span className="material-icons Nav_Scroll_Top_Icon">arrow_upward</span>
                                </m.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {!isAtPageTop && (
                                <m.div
                                    initial={{ opacity: 0, x: "-30rem" }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: "-30rem" }}
                                    transition={{ type: "tween", duration: 0.3 }}
                                    className="Nav_Scroll_StatusBar"
                                    style={{ scaleX: scrollYProgress }}
                                ></m.div>
                            )}
                        </AnimatePresence>
                    </m.div>

                    {/* Seção de Serviços */}
                    <Section_Services />

                    {useSectionDivider && <div className="Section_Divider"></div>}

                    {/* Seção de Quem Somos */}
                    <m.section
                        className="Main_Section Horizontal_Section"
                        id="who"
                        onViewportEnter={() => {
                            setIsAtSecondPage(true);
                        }}
                        onViewportLeave={() => {
                            setIsAtSecondPage(false);
                        }}
                    >
                        <div className="Section_Main_Info">
                            <h1 className="Section_Title LittleSmaller">About Us</h1>
                            <h2 className="Section_SubTitle Yellow_Text">& What Set Us Apart</h2>
                            <p className="Service_Paragraph">
                                More than just illustrators - We are storytellers, creators, and builders of immersive worlds. Based in Brazil, our
                                studio thrives on bringing new narratives to life through original and artful concepts.
                            </p>
                            <p className="Service_Paragraph">
                                We started with a small team fueled by passion and a vision to redefine visual storytelling. We honed our craft,
                                experimenting with different styles and techniques to develop our signature approach. As word spread about our unique
                                perspective, opportunities began to arise, and we eagerly embraced each project as a chance to push the boundaries of
                                creative expression.
                            </p>

                            <p className="Service_Paragraph">
                                Over the past three years, our studio has experienced a remarkable journey of growth and achievement. We&apos;ve
                                expanded our team, welcoming diverse talents that have enriched our collaborative spirit. This new period has been
                                defined by our commitment to innovation, constantly seeking new ways to captivate audiences and leave a lasting
                                impression.
                            </p>

                            <button className="Outlined_Btn">Know More</button>
                        </div>

                        <div className="Section_Detail_Info">
                            <div className="PS_Target_Phrase_Container">
                                <div className="PS_Target_Phrase">
                                    <span className="material-icons PS_Target_Phrase_Icon_Alt_2">bolt</span>
                                    <h2 className="PS_Target_Phrase_Title">Agility</h2>
                                    <p className="PS_Target_Phrase_Text">
                                        We always ensure we deliver our projects on time, or you get you money back!
                                    </p>
                                </div>

                                <div className="PS_Target_Phrase">
                                    <span className="material-icons PS_Target_Phrase_Icon">fingerprint</span>
                                    <h2 className="PS_Target_Phrase_Title">Authenticity</h2>
                                    <p className="PS_Target_Phrase_Text">Every creation is infused with our unique artistic vision and style.</p>
                                </div>

                                <div className="PS_Target_Phrase">
                                    <span className="material-icons PS_Target_Phrase_Icon_Alt">auto_mode</span>
                                    <h2 className="PS_Target_Phrase_Title">Autonomy</h2>
                                    <p className="PS_Target_Phrase_Text">
                                        We take ownership of our projects, guiding them from conception to completion with responsibility and
                                        dedication.
                                    </p>
                                </div>

                                <div className="PS_Target_Phrase">
                                    <span className="material-icons PS_Target_Phrase_Icon">visibility</span>
                                    <h2 className="PS_Target_Phrase_Title">Attention to Detail</h2>
                                    <p className="PS_Target_Phrase_Text">
                                        We pay meticulous attention to detail, ensuring every element contributes to the overall storytelling
                                        experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isAtSecondPage && (
                                <>
                                    <m.div
                                        initial={{ opacity: 0, x: "20vw" }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: "20vw" }}
                                        transition={{ type: "tween", duration: 1 }}
                                        className="Featured_Image_Container Right Desktop_Only"
                                    >
                                        <Image
                                            className="Featured_Image"
                                            src={"/featured_art/parcinha_001.png"}
                                            alt="Studio Maracuja Logo"
                                            width={2568}
                                            height={590}
                                        />
                                    </m.div>
                                </>
                            )}
                        </AnimatePresence>

                        <svg id="maracuja_logo_svg_preto" viewBox="0 0 422.26 191.66">
                            <g id="maracuja_logo_svg_preto_layer">
                                <path
                                    className="maracuja_logo_svg_preto_objeto"
                                    d="M30.5,191.66V30.61h92.36v129.54h93.11V62.12s-1.53-31.52,31.52-31.52h112.76s31.52-3.61,31.52,31.52v129.54"
                                />
                            </g>
                        </svg>
                    </m.section>

                    {useSectionDivider && <div className="Section_Divider"></div>}

                    {/* Seção de Clientes */}
                    <m.section className="Main_Section" id="our-clients" onViewportEnter={() => {}} onViewportLeave={() => {}}>
                        <div className="Section_Detail_Info">
                            <div className="Partners_Scroller InvertedAnimation">
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/bethesda_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/blizzard_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/lucasarts_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/ubisoft_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/bethesda_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/blizzard_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/lucasarts_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>

                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/ubisoft_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/bethesda_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/blizzard_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/lucasarts_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/ubisoft_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/bethesda_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/blizzard_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/lucasarts_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/ubisoft_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card InvertedAnimation">
                                    <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                            </div>
                        </div>
                        <div className="Section_Main_Info">
                            <h1 className="Section_Title LittleSmaller">Our Clients</h1>
                            <h2 className="Section_SubTitle Yellow_Text">And Their Opinions</h2>
                        </div>

                        <div className="Section_Detail_Info">
                            <div className="Partners_Scroller">
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/bethesda_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/blizzard_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/lucasarts_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/ubisoft_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/bethesda_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/blizzard_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/lucasarts_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>

                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/ubisoft_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/bethesda_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/blizzard_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/lucasarts_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/ubisoft_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/bethesda_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/blizzard_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/lucasarts_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/riot_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/sony_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                                <div className="Partner_Card">
                                    <Image
                                        className="Partner_Logo"
                                        src="/partners/ubisoft_logo_200.png"
                                        alt="bethesda logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="Partner_Card">
                                    <Image className="Partner_Logo" src="/partners/valve_logo_200.png" alt="bethesda logo" width={100} height={100} />
                                </div>
                            </div>
                        </div>

                        <svg id="maracuja_logo_svg_preto" viewBox="0 0 422.26 191.66">
                            <g id="maracuja_logo_svg_preto_layer">
                                <path
                                    className="maracuja_logo_svg_preto_objeto"
                                    d="M30.5,191.66V30.61h92.36v129.54h93.11V62.12s-1.53-31.52,31.52-31.52h112.76s31.52-3.61,31.52,31.52v129.54"
                                />
                            </g>
                        </svg>
                    </m.section>

                    {useSectionDivider && <div className="Section_Divider"></div>}

                    {/* Seção de Projetos */}
                    <Section_Projects />

                    {useSectionDivider && <div className="Section_Divider"></div>}

                    {/* Seção de Trabalhe Conosco */}
                    <m.section className="Main_Section Horizontal_Section" id="work-with-us">
                        <div className="Section_Main_Info">
                            <h1 className="Section_Title Smaller">Work With Us</h1>
                            <h2 className="Section_SubTitle">We Grow Strong Together</h2>
                            <p className="Service_Paragraph">
                                As an Outsourcing Studio - Collaboration is at the heart of what we do. We love partnering with clients and fellow
                                creatives to build meaningful projects that leave a lasting impact.
                            </p>

                            <button className="WorkWithUs_Btn Outlined_Btn">
                                <span className="WWU_Text">Hire Our Services</span>{" "}
                                <span className="material-icons WorkWithUs_Btn_Arrow">arrow_forward</span>
                            </button>

                            <button className="WorkWithUs_Btn Outlined_Btn">
                                <span className="WWU_Text">Join The Team</span>{" "}
                                <span className="material-icons WorkWithUs_Btn_Arrow">arrow_forward</span>
                            </button>
                        </div>

                        <div className="Section_Detail_Info"></div>

                        <Image className="Section_Background_Img" src={"/projects/skyweaver/2.jpg"} alt="" width={1600} height={700} />
                    </m.section>

                    {useSectionDivider && <div className="Section_Divider"></div>}
                    {/*
                
                <section className="Main_Section" id="shop">
                    <h1 className="Section_SubTitle">Buy Our Art</h1>
                </section>

                <div className="Section_Divider"></div>

                <section className="Main_Section" id="team">
                    <h1 className="Section_SubTitle">Meet Our Team</h1>
                    <h5>Pedro Dutra</h5>
                    <h6>Creative Director</h6>
                    <h5>João Ito</h5>
                    <h6>Graphic Designer</h6>
                    <h5>Daiany Tadaieski</h5>
                    <h6>Finance Director</h6>
                </section>

                <div className="Section_Divider"></div>
                
                */}

                    <m.section className="Main_Section Horizontal_Section" id="contact">
                        <div className="Section_Main_Info">
                            <h1 className="Section_Title Smaller">Get in Touch</h1>
                            <h2 className="Section_SubTitle Smaller">& Follow Us on Social Media!</h2>
                            <p className="Service_Paragraph">
                                Feel free to send an email or contact us at any of the channels below, we are always eager to meet new people and
                                discuss interesting ideas!
                            </p>

                            <form className="Contact_Form">
                                <input type="text" placeholder="Subject" />
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <textarea placeholder="Message"></textarea>
                                <button type="submit">Submit</button>
                            </form>

                            <div className="Social_Media_Icons_Container">
                                <Icon_Telephone />

                                <Icon_Artstation />
                                <Icon_Instagram />
                            </div>
                        </div>
                        <div className="Section_Detail_Info"></div>

                        <Image className="Section_Background_Img" src={"/projects/skyweaver/3.jpg"} alt="" width={1600} height={700} />
                    </m.section>

                    {useSectionDivider && <div className="Section_Divider"></div>}

                    <m.section className="Main_Section Horizontal_Section" id="footer">
                        <footer className="Last_Divider">
                            <Image
                                className="Section_Intro_Image"
                                src={"/brand_assets/studiomaracuja_logo-branca.png"}
                                alt="Studio Maracuja Logo"
                                width={2568}
                                height={590}
                            />
                        </footer>
                    </m.section>

                    {/*
                        <div className="Main_Wrapper_DynamicBackground">
                        <svg id="maracuja_logo_svg_preto" viewBox="0 0 422.26 191.66">
                            <g id="maracuja_logo_svg_preto_layer">
                                <path
                                    className="maracuja_logo_svg_preto_objeto"
                                    d="M30.5,191.66V30.61h92.36v129.54h93.11V62.12s-1.53-31.52,31.52-31.52h112.76s31.52-3.61,31.52,31.52v129.54"
                                />
                            </g>
                        </svg>
                    </div>
                    */}
                </div>
            </main>
        </>
    );
}
