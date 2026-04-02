'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ServicesSection.module.css';
import FlowingMenu from './FlowingMenu';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const flowRef = useRef(null);

  const flowItems = [
    { link: '#', text: 'Website Design', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Branding', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'UX/UI', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Motion Design', image: 'https://picsum.photos/600/400?random=4' },
    { link: '#', text: 'SEO', image: 'https://picsum.photos/600/400?random=5' },
    { link: '#', text: 'Content Creation', image: 'https://picsum.photos/600/400?random=6' },
    { link: '#', text: 'Landing Page', image: 'https://picsum.photos/600/400?random=7' }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 🔹 HEADER ANIMATION
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // 🔹 FLOWING MENU ANIMATION
      gsap.fromTo(flowRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          }
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.topRow} ref={headerRef}>
          <div className={styles.leftLabel}>
            <span className={styles.bullet}>•</span> Our services
          </div>
          <div className={styles.rightHead}>
            <h2 className={styles.mainHeadline}>
              Everything your brand needs to grow — under one roof.
            </h2>
          </div>
        </div>
      </div>

      <div ref={flowRef}>
        <FlowingMenu
          items={flowItems}
          speed={15}
          textColor="#efe5e0ff"
          bgColor="transparent"
          marqueeBgColor="#ec0707"
          marqueeTextColor="#FFFFFF"
          borderColor="rgba(255,255,255,0.08)"
        />
      </div>
    </section>
  );
}