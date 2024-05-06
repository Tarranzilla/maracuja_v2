import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";

import { motion as m, AnimatePresence } from "framer-motion";

import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 4000); // 2 seconds

        return () => clearTimeout(timer); // Clean up on component unmount
    }, []);

    return (
        <>
            <AnimatePresence>
                {!isLoaded && (
                    <m.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Main_Loader" key={"Main_Loader"}>
                        <Image className="Loader_Image" src="/brand_assets/Maracuja_Icon_Logo.png" alt="Loader" width={100} height={100} priority />
                    </m.div>
                )}

                {!isCookiesAccepted && (
                    <m.div initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: "7vh" }} className="Cookies_Banner_Container" key={"Cookies_Banner"}>
                        <span className="material-icons Cookies_Icon">cookie</span>
                        <p className="Cookies_Banner_Text">
                            This website uses cookies to enhance the user experience. By using this website, you agree to our use of cookies.
                        </p>
                        <button
                            className="Cookies_Banner_Btn"
                            onClick={() => {
                                setIsCookiesAccepted(true);
                            }}
                        >
                            Got it!
                        </button>
                    </m.div>
                )}
            </AnimatePresence>

            <Component {...pageProps} />
        </>
    );
}
