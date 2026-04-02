'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollThemeTransition.module.css';
import ourFeaturedWorkImage from '../images/ourFeaturedWorkImage.webp';
import Shuffle from './shuffleText';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollThemeTransition() {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!section || !overlay) return;

    let tl;
    let themeTrigger;

    gsap.context(() => {
      gsap.set(overlay, {
        clipPath: 'circle(0% at 50% 50%)',
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(overlay, {
        clipPath: 'circle(150% at 50% 50%)',
        ease: 'power2.out',
      });

      themeTrigger = ScrollTrigger.create({
        trigger: section,
        start: 'bottom center',
        onEnter: () => {
          document.documentElement.classList.remove('dark');
        },
        onLeaveBack: () => {
          document.documentElement.classList.add('dark');
        },
      });
    }, section);

    return () => {
      // Explicitly kill what we created.
      // Avoid `ctx.revert()` here because in Next dev/StrictMode it can
      // run pin/unpin teardown twice, which sometimes throws:
      // "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child"
      if (themeTrigger) themeTrigger.kill();
      if (tl) {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      }
      // Intentionally no `ScrollTrigger.refresh()` here.
      // It can trigger pin/unpin teardown again during Next dev StrictMode cleanup.
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.darkLayer}>
        <img
          src={ourFeaturedWorkImage.src}
          alt="Entering Experience"
          className={styles.darkImage}
        />
      </div>

      <div ref={overlayRef} className={styles.lightLayer}>
        <h1><Shuffle
          text="Work Showcase"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover
          respectReducedMotion={true}
          loop
          loopDelay={0.8}
        /></h1>
      </div>
    </section>
  );
}
