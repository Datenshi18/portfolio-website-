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
    title: "Restaurant website",
    description: "A visually rich dining experience showcasing menus, ambiance, and seamless table reservations.",
    bg: "/images/restaurentwebsite.webp"
  },
  {
    num: "02",
    title: "Gym Website",
    description: "A high-energy fitness platform designed to highlight workouts, trainers, and membership plans.",
    bg: "/images/gymimage.webp"
  },
  {
    num: "03",
    title: "Salon website",
    description: "An elegant beauty service website featuring styling options, bookings, and client transformations.",
    bg: "/images/salonwebsite.webp"
  },
  {
    num: "04",
    title: "This Portfolio",
    description: "A personal portfolio crafted to present creative work, skills, and projects with modern aesthetics.",
    bg: "/images/portfolio.webp"
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