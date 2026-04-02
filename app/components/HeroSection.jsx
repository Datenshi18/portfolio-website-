'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HeroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const headlineInnerRef = useRef(null);
  const subtextInnerRef = useRef(null);
  const bottomLineRef = useRef(null);
  const cornerRefs = useRef([]);
  const bottomAreaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // --- Initial Fade-in Timeline ---
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Apply initial state to inner spans
      gsap.set([headlineInnerRef.current, subtextInnerRef.current], { y: 100, opacity: 0 });
      gsap.set(bottomLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(cornerRefs.current, { opacity: 0 });

      introTl.to([headlineInnerRef.current, subtextInnerRef.current], {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
      })
        .to(bottomLineRef.current, {
          scaleX: 1,
          duration: 1,
        }, '-=0.8')
        .to(cornerRefs.current, {
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.5');

      // --- Scroll Exit Timeline ---
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        }
      });

      // HEADLINE: Fast movement upward and slightly left + fade
      scrollTl.to('.hero-headline', {
        x: () => -window.innerWidth * 0.1111,
        y: () => -window.innerHeight * 0.9,
        opacity: 0.3,
        ease: 'none'
      }, 0)
        // SUBTEXT: Slower movement upward and slightly right
        .to('.hero-subtext', {
          x: () => window.innerWidth * 0.1,
          y: () => -window.innerHeight * 0.25,
          opacity: 0.3,
          ease: 'none'
        }, 0)
        // Fade top corners out cleanly without touching the solid background
        .to(cornerRefs.current, {
          opacity: 0,
          ease: 'none'
        }, 0)
        // Legacy bottom area fade
        .to(bottomAreaRef.current, {
          opacity: 0,
          ease: 'none'
        }, 0);

    }); // No scope limitation to ensure global strings map successfully

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <div className={styles.heroPinWrapper}>
      <section className={`${styles.heroSection} hero-section`} ref={containerRef}>
        {/* Corner UI Elements */}
        <div className={styles.cornerTopLeft} ref={el => cornerRefs.current[0] = el}>
          AGENCY.COM
        </div>
        <div className={styles.cornerTopRight} ref={el => cornerRefs.current[1] = el}>
          VOL. 1 / 2026
        </div>

        {/* Main Massive Typography Container */}
        <div className={styles.mainTextContainer}>
          <h1 className={`${styles.heroHeadline} hero-headline`}>
            <span ref={headlineInnerRef} style={{ display: 'inline-block' }}>COMPANY NAME</span>
          </h1>
          <h1 className={`${styles.heroSubtext} hero-subtext`}>
            <span ref={subtextInnerRef} style={{ display: 'inline-block' }}>BUILD WITH US</span>
          </h1>
        </div>

        {/* Bottom Architectural Area */}
        <div className={styles.bottomAreaContainer} ref={bottomAreaRef}>
          <div className={styles.redLine} ref={bottomLineRef}></div>
          <div className={styles.bottomContent}>
            <div className={styles.cornerBottomLeft} ref={el => cornerRefs.current[2] = el}>
              P. 001
            </div>
            <div className={styles.cornerBottomRight} ref={el => cornerRefs.current[3] = el}>
              <span className={styles.creativeTitle}>/ DIGITAL AGENCY</span>
              <br />
              <span className={styles.scrollText}>↓ SCROLL TO TUNE IN</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
