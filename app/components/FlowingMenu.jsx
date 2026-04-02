"use client";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './flowingmenu.module.css';

function FlowingMenu({
    items = [],
    speed = 15,
    textColor = '#fff',
    bgColor = '#060010',
    marqueeBgColor = '#fff',
    marqueeTextColor = '#060010',
    borderColor = '#fff'
}) {
    return (
        <div className={styles.container} style={{ backgroundColor: bgColor }}>
            <nav className={styles.nav}>
                {items.map((item, idx) => (
                    <MenuItem
                        key={idx}
                        idx={idx}
                        {...item}
                        speed={speed}
                        textColor={textColor}
                        marqueeBgColor={marqueeBgColor}
                        marqueeTextColor={marqueeTextColor}
                        borderColor={borderColor}
                        isFirst={idx === 0}
                    />
                ))}
            </nav>
        </div>
    );
}

function MenuItem({ link, text, image, speed, textColor, marqueeBgColor, marqueeTextColor, borderColor, isFirst, idx }) {
    const itemRef = useRef(null);
    const marqueeRef = useRef(null);
    const marqueeInnerRef = useRef(null);
    const animationRef = useRef(null);
    const [repetitions, setRepetitions] = useState(4);

    const animationDefaults = { duration: 0.6, ease: 'expo' };

    const findClosestEdge = (mouseX, mouseY, width, height) => {
        const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
        const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
        return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    useEffect(() => {
        const calculateRepetitions = () => {
            if (!marqueeInnerRef.current) return;
            const marqueeContent = marqueeInnerRef.current.querySelector(`.${styles.marqueePart}`);
            if (!marqueeContent) return;
            const contentWidth = marqueeContent.offsetWidth;
            const viewportWidth = window.innerWidth;
            const needed = Math.ceil(viewportWidth / contentWidth) + 2;
            setRepetitions(Math.max(4, needed));
        };

        calculateRepetitions();
        window.addEventListener('resize', calculateRepetitions);
        return () => window.removeEventListener('resize', calculateRepetitions);
    }, [text, image]);

    useEffect(() => {
        const setupMarquee = () => {
            if (!marqueeInnerRef.current) return;
            const marqueeContent = marqueeInnerRef.current.querySelector(`.${styles.marqueePart}`);
            if (!marqueeContent) return;
            const contentWidth = marqueeContent.offsetWidth;
            if (contentWidth === 0) return;

            if (animationRef.current) {
                animationRef.current.kill();
            }

            animationRef.current = gsap.to(marqueeInnerRef.current, {
                x: -contentWidth,
                duration: speed,
                ease: 'none',
                repeat: -1
            });
        };

        const timer = setTimeout(setupMarquee, 50);
        return () => {
            clearTimeout(timer);
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [text, image, repetitions, speed]);

    const handleMouseEnter = ev => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
            .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    };

    const handleMouseLeave = ev => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
    };

    return (
        <div
            className={styles.menuItem}
            ref={itemRef}
            style={{ borderTop: isFirst ? 'none' : `1px solid ${borderColor}` }}
        >
            <a
                className={styles.menuLink}
                href={link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ color: textColor }}
            >
                <div className={styles.index}>
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className={styles.serviceName}>{text}</div>
                <div className={styles.arrowContainer}>
                  <span className={styles.arrowWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
            </a>
            <div
                className={styles.marqueeContainer}
                ref={marqueeRef}
                style={{ backgroundColor: marqueeBgColor }}
            >
                <div className={styles.marqueeInner} ref={marqueeInnerRef}>
                    {[...Array(repetitions)].map((_, idx) => (
                        <div className={styles.marqueePart} key={idx} style={{ color: marqueeTextColor }}>
                            <span className={styles.marqueeText}>{text}</span>
                            <div
                                className={styles.marqueeImage}
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FlowingMenu;
