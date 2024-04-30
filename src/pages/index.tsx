import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Icon_Artstation from "@/components/icons/Icon_Artstation";
import Icon_Facebook from "@/components/icons/Icon_Facebook";
import Icon_Instagram from "@/components/icons/Icon_Instagram";
import Icon_Twitter from "@/components/icons/Icon_Twitter";
import Icon_Linkedin from "@/components/icons/Icon_Linkedin";

export default function Home() {
    return (
        <>
            <Head>
                <title>Maracujá Studio</title>
                <meta name="description" content="We create what no one expects." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="Main_Wrapper">
                <div className="Section_Divider"></div>
                <section className="Main_Section Section_Intro" id="intro">
                    <Image
                        className="Section_Intro_Image"
                        src={"/brand_assets/studiomaracuja_logo-branca.png"}
                        alt="Studio Maracuja Logo"
                        width={2568}
                        height={590}
                    />
                    <h2 className="Section_Intro_SubTitle">We create new worlds.</h2>
                </section>

                <div className="Section_Intro_Nav">
                    <Link className="Intro_Nav_Link" href="#who">
                        Who We Are
                    </Link>
                    <Link className="Intro_Nav_Link" href="#projects">
                        Projects
                    </Link>
                    <Link className="Intro_Nav_Link" href="#services">
                        Aquire Our Services
                    </Link>

                    {/*
                    
                    <Link className="Intro_Nav_Link" href="#shop">
                        Buy Our Art
                    </Link>
                    <Link className="Intro_Nav_Link" href="#team">
                        Meet The Team
                    </Link>

                    */}

                    <Link className="Intro_Nav_Link" href="#contact">
                        Get in Touch!
                    </Link>

                    <Link className="Intro_Nav_Link" href="#contact">
                        Work With Us
                    </Link>
                </div>

                <section className="Main_Section" id="who">
                    <h1 className="Section_SubTitle">We are more than just illustrators.</h1>
                    <h1 className="Section_SubTitle">We are storytellers, creators, and builders of immersive worlds.</h1>
                    <h1 className="Section_SubTitle">
                        Based in Brazil, our studio thrives on bringing new narratives to life through original and artful concepts.
                    </h1>
                </section>

                <div className="Section_Divider"></div>

                <section className="Main_Section Horizontal_Section" id="who-2">
                    <span className="material-icons Section_Main_Icon">grass</span>

                    <div className="Main_Section_Text_Container">
                        <h1 className="Section_SubTitle">We Grow Strong Together.</h1>
                        <h1 className="Section_SubTitle">
                            Collaboration is at the heart of what we do. We love partnering with clients and fellow creatives to build meaningful
                            projects that leave a lasting impact.
                        </h1>
                    </div>
                </section>

                <div className="Section_Divider"></div>

                <section className="Main_Section Section_Differential" id="who-3">
                    <h1 className="Section_SubTitle Centered_Text">What Sets Us Apart</h1>

                    <div className="PS_Target_Phrase_Container">
                        <div className="PS_Target_Phrase">
                            <span className="material-icons PS_Target_Phrase_Icon">fingerprint</span>
                            <h2 className="PS_Target_Phrase_Title">Authenticity</h2>
                            <p className="PS_Target_Phrase_Text">Every creation is infused with our unique artistic vision and style.</p>
                        </div>

                        <div className="PS_Target_Phrase">
                            <span className="material-icons PS_Target_Phrase_Icon_Alt">auto_mode</span>
                            <h2 className="PS_Target_Phrase_Title">Autonomy</h2>
                            <p className="PS_Target_Phrase_Text">
                                We take ownership of our projects, guiding them from conception to completion with responsibility and dedication.
                            </p>
                        </div>

                        <div className="PS_Target_Phrase">
                            <span className="material-icons PS_Target_Phrase_Icon">visibility</span>
                            <h2 className="PS_Target_Phrase_Title">Attention to Detail</h2>
                            <p className="PS_Target_Phrase_Text">
                                We pay meticulous attention to detail, ensuring every element contributes to the overall storytelling experience.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="Section_Divider"></div>

                <section className="Main_Section No_Gap" id="projects">
                    <h1 className="Section_SubTitle Centered_Text">Projects</h1>
                    <div className="Projects_Container">
                        <div className="Project_Card">
                            <Image className="Project_Card_Main_Img" src={"/projects/skyweaver/Thumb_14.jpg"} alt="" width={1600} height={700} />
                            <h2 className="Project_Card_Title">Skyweaver</h2>
                            <button className="Project_Card_KnowMore_Btn">
                                Know More <span className="material-icons">more_horiz</span>
                            </button>
                        </div>
                        <div className="Project_Card">
                            <Image
                                className="Project_Card_Main_Img"
                                src={"/projects/steelworks/environment_junkyard_slumillustration_site.jpg"}
                                alt=""
                                width={1600}
                                height={700}
                            />
                            <h2 className="Project_Card_Title">Steelworks</h2>
                            <button className="Project_Card_KnowMore_Btn">
                                Know More <span className="material-icons">more_horiz</span>
                            </button>
                        </div>
                    </div>
                </section>

                <div className="Section_Divider"></div>

                <section className="Main_Section Section_Services" id="services">
                    <h1 className="Section_SubTitle Centered_Text">Aquire Our Services</h1>
                    <p className="Section_Paragraph">
                        Whether you're a game studio envisioning a new product or brand seeking to tell a captivating story, we invite you to join us
                        on this creative journey. Let's bring your ideas to life and build something extraordinary together.
                    </p>

                    <div className="Services_Container">
                        <div className="Service">
                            <span className="material-icons Service_Icon">brush</span>
                            <h2 className="Service_Title">Illustration</h2>
                            <p className="Service_Text">You describe and we draw. Our illustrations are vibrant, dynamic, and full of life.</p>
                            <button className="Service_Action_Btn">Get In Touch!</button>
                        </div>

                        <div className="Service">
                            <span className="material-icons Service_Icon">palette</span>
                            <h2 className="Service_Title">Concept Art</h2>
                            <p className="Service_Text">We create stunning concept art that sets the tone for your project.</p>
                            <button className="Service_Action_Btn">Get In Touch!</button>
                        </div>

                        <div className="Service">
                            <span className="material-icons Service_Icon">send</span>
                            <h2 className="Service_Title">Content Creation</h2>
                            <p className="Service_Text">We craft engaging narratives that captivate and inspire audiences.</p>
                            <button className="Service_Action_Btn">Get In Touch!</button>
                        </div>

                        <div className="Service">
                            <span className="material-icons Service_Icon">diversity_2</span>
                            <h2 className="Service_Title">Project Management</h2>
                            <p className="Service_Text">We oversee every aspect of your project, ensuring it meets your goals and expectations.</p>
                            <button className="Service_Action_Btn">Get In Touch!</button>
                        </div>
                    </div>
                </section>

                <div className="Section_Divider"></div>

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

                <section className="Main_Section" id="contact">
                    <h1 className="Section_SubTitle Centered_Text">Get in Touch!</h1>
                    <p className="Section_Paragraph Contact_Paragraph">
                        Feel free to contact us at any of the channels below, we are always eager to meet new people and discuss interesting ideas!
                    </p>

                    <h5 className="Contact_Detail">
                        <span className="material-icons Contact_Detail_Icon">email</span> contact@studiomaracuja.com
                    </h5>

                    <h5 className="Contact_Detail">
                        <span className="material-icons Contact_Detail_Icon">ring_volume</span> +55 41 998 727 533
                    </h5>

                    <div className="Social_Media_Icons_Container">
                        <Icon_Artstation />
                        {/*
                        <Icon_Facebook />
                        */}

                        <Icon_Instagram />
                        <Icon_Twitter />
                        <Icon_Linkedin />
                    </div>
                </section>

                <div className="Section_Divider"></div>

                <footer>
                    <Image
                        className="Section_Intro_Image"
                        src={"/brand_assets/studiomaracuja_logo-branca.png"}
                        alt="Studio Maracuja Logo"
                        width={2568}
                        height={590}
                    />
                </footer>
            </main>
        </>
    );
}
