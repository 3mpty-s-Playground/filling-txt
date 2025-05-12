"use client";
import { useRef } from "react";

// Import de GSAP & outils
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import du fichier de style
import styles from "./page.module.scss";

export default function Home() {
    // Références aux éléments à cibler
    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(titleRef.current, {
            // Slide le fond coloré horizontalement
            backgroundPosition: "0% 0%",
            // Pas de courbe d'animation (fluidité avec scroll)
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                // Synchronise l'animation avec le scroll
                scrub: true,
            },
        });
    }, []);

    return (
        <main ref={containerRef} className={styles.main}>
            <div className={styles.text}>
                <h1 ref={titleRef}>Filling</h1>
            </div>
        </main>
    );
}
