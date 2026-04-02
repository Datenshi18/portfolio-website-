"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProjectShowcase.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    num: "01",
    title: "The Van Der Linde Agency",
    description: "A premium B2B branding experience that captures the essence of frontier digital design.",
    bg: "/images/work1.png"
  },
  {
    num: "02",
    title: "Outlaw Systems",
    description: "High-performance architecture built for those who break the rules of conventional UI.",
    bg: "/images/work2.png"
  },
  {
    num: "03",
    title: "Frontier Digital",
    description: "Modern e-commerce solutions with a rugged, cinematic aesthetic.",
    bg: "/images/work3.png"
  },
  {
    num: "04",
    title: "Redemption II",
    description: "A comprehensive design system that balances grit with absolute precision.",
    bg: "/images/work4.png"
  }
];

export default function ProjectShowcase() {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(horizontalRef.current, {
        x: () => -(horizontalRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${horizontalRef.current.scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });

      projects.forEach((_, i) => {
        gsap.to(`.parallaxBg-${i}`, {
          x: 50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${horizontalRef.current.scrollWidth}`,
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.horizontalSection} ref={containerRef}>
      <div className={styles.stickyWrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>Selected<br />Work</h2>
        </div>

        <div className={styles.cardsContainer} ref={horizontalRef}>
          {projects.map((proj, i) => (
            <div key={i} className={styles.projectCard}>
              <div
                className={`${styles.parallaxBg} parallaxBg-${i}`}
                style={{
                  backgroundColor: "#111",
                  backgroundImage: `url(${proj.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className={styles.overlay} />

              <div className={styles.cardContent}>
                <span className={styles.projectNumber}>PROJECT {proj.num}</span>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}