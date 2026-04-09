'use client'

import React, { useEffect, useRef } from 'react';

/**
 * ScrollReveal — Intersection Observer wrapper
 * Adds 'visible' class to children when they enter the viewport.
 * 
 * Props:
 *   - threshold: 0-1, how much of element must be visible (default 0.15)
 *   - stagger: delay in ms between children (default 80)
 *   - className: additional class name for wrapper
 *   - as: HTML element to render (default 'div')
 */
export default function ScrollReveal({
  children,
  threshold = 0.15,
  stagger = 80,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find all direct children with .fade-up class
    const fadeElements = container.querySelectorAll('.fade-up');
    if (fadeElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible with stagger
            const el = entry.target;
            const index = Array.from(fadeElements).indexOf(el);
            const delay = index * stagger;

            setTimeout(() => {
              el.classList.add('visible');
            }, delay);

            // Once triggered, stop observing (trigger once)
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, stagger]);

  return (
    <Tag ref={containerRef} className={className} {...rest}>
      {children}
    </Tag>
  );
}
