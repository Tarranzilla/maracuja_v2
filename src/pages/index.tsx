import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
                    <Link className="Intro_Nav_Link" href="#shop">
                        Buy Our Art
                    </Link>
                    <Link className="Intro_Nav_Link" href="#team">
                        Meet The Team
                    </Link>
                    <Link className="Intro_Nav_Link" href="#contact">
                        Get in Touch!
                    </Link>
                </div>

                <section className="Main_Section" id="who">
                    <h1 className="Section_SubTitle">
                        We are more than just illustrators – We are storytellers, creators, and builders of immersive worlds.
                    </h1>
                    <h1 className="Section_SubTitle">
                        Based in Brazil, our studio thrives on bringing new narratives to life through original and artsy illustrations.
                    </h1>
                </section>

                <section className="Main_Section" id="who-2">
                    <div className="Phrase_Shifter">
                        <div className="PS_Target_Phrase_Container">
                            <h2 className="PS_Target_Phrase">Creating</h2>
                            <p>
                                We specialize in creating captivating visual stories that resonate with audiences. From concept development to final
                                artwork, we are dedicated to crafting unique and imaginative narratives.
                            </p>
                            <h2 className="PS_Target_Phrase">Growing</h2>
                            <p>
                                We believe in continuous growth and evolution. With each project, we challenge ourselves to push boundaries, explore
                                new techniques, and expand our creative horizons.
                            </p>
                            <h2 className="PS_Target_Phrase">Together</h2>
                            <p>
                                Collaboration is at the heart of what we do. We love partnering with clients and fellow creatives to build meaningful
                                projects that leave a lasting impact.
                            </p>
                        </div>

                        <h1>What Sets Us Apart</h1>

                        <div className="PS_Target_Phrase_Container">
                            <h2 className="PS_Target_Phrase">Authenticity</h2>
                            <p>Every illustration is infused with our unique artistic vision and style.</p>
                            <h2 className="PS_Target_Phrase">Innovation</h2>
                            <p>We embrace experimentation and innovation to deliver fresh and dynamic artwork.</p>
                            <h2 className="PS_Target_Phrase">Attention to Detail</h2>
                            <p>We pay meticulous attention to detail, ensuring every element contributes to the overall storytelling experience.</p>
                        </div>
                    </div>
                </section>

                <section className="Main_Section" id="projects">
                    <h1>Projects</h1>
                    <div className="Project_Banner">
                        <h2>Skyweaver</h2>
                        <h2>Steelworks</h2>
                    </div>
                </section>

                <section className="Main_Section" id="services">
                    <h1>Aquire Our Services</h1>
                    <p>
                        Whether you're a brand seeking to tell a captivating story or a fellow creative looking to collaborate, we invite you to join
                        us on this creative journey. Let's bring your ideas to life and build something extraordinary together.
                    </p>
                </section>

                <section className="Main_Section" id="shop">
                    <h1>Buy Our Art</h1>
                </section>

                <section className="Main_Section" id="team">
                    <h1>Meet Our Team</h1>
                    <h5>Pedro Dutra</h5>
                    <h6>Creative Director</h6>
                    <h5>João Ito</h5>
                    <h6>Graphic Designer</h6>
                    <h5>Daiany Tadaieski</h5>
                    <h6>Finance Director</h6>
                </section>

                <section className="Main_Section" id="contact">
                    <h1>Get in Touch!</h1>
                    <h5>Telephone: +55 41 998 727 533</h5>
                    <h5>@studiomaracuja</h5>
                </section>
            </main>
        </>
    );
}
