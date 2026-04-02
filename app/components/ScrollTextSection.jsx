'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollTextSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTextSection() {
  const sectionRef = useRef(null);

  const buildRef = useRef(null);
  const meansRef = useRef(null);
  const somethingRef = useRef(null);
  const sub1Ref = useRef(null);
  const sub2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      const allText = [
        buildRef.current,
        meansRef.current,
        somethingRef.current,
        sub1Ref.current,
        sub2Ref.current
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        }
      });

      // 🔹 INITIAL STATE (hidden)
      gsap.set(allText, {
        opacity: 0,
        y: 40,
        color: "#000000"
      });

      // 🔥 PHASE 1 — Reveal
      tl.to(allText, {
        opacity: 1,
        y: 0,
        color: "#EFEBE0",
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
      }, 0);

      // ⚖️ PHASE 2 — Hold
      tl.to({}, { duration: 1 });

      // 🔴 PHASE 3 — Highlight
      tl.to(
        [meansRef.current, sub1Ref.current, sub2Ref.current],
        {
          color: "#111111",
          duration: 0.8,
          ease: "power1.inOut"
        }
      ).to(
        [buildRef.current, somethingRef.current],
        {
          color: "#FF3500",
          duration: 0.8,
          ease: "power1.inOut"
        },
        "<"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.scrollSection}>
      {/* CORNER LABEL */}
      <div className={styles.cornerTopRight}>
        / MANIFESTO / P. 002
      </div>

      <div className={styles.textContainer}>

        {/* LINE 1 */}
        <h1 className={styles.headline}>
          <span ref={buildRef} className={styles.word}>Build</span>
          <span ref={meansRef} className={styles.word}> that means</span>
          <span ref={somethingRef} className={styles.word}> something.</span>
        </h1>

        {/* LINE 2 */}
        <p className={styles.subtext}>
          <span ref={sub1Ref} className={styles.word}>
            Not just something
          </span>
        </p>

        {/* LINE 3 */}
        <p className={styles.subtext}>
          <span ref={sub2Ref} className={styles.word}>
            that works.
          </span>
        </p>

      </div>
    </section>
  );
}