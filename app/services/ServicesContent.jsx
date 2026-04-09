'use client'

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './services.module.css';

const SERVICES = [
  {
    num: '01',
    title: 'Website Design',
    description: 'Bespoke, conversion-focused web design that tells your brand story with cinematic precision. Every layout, every gesture — intentional.',
    features: ['Custom UI/UX Design', 'Responsive Layouts', 'Interactive Prototyping', 'Design Systems'],
  },
  {
    num: '02',
    title: 'Web Development',
    description: 'Bulletproof, scalable code that performs at 60fps. We build with modern frameworks and deploy for maximum speed.',
    features: ['Next.js / React', 'Performance Optimization', 'API Architecture', 'CMS Integration'],
  },
  {
    num: '03',
    title: 'Branding',
    description: 'Brand identity that cuts through noise. We define your visual language, voice, and strategic positioning.',
    features: ['Logo & Identity', 'Brand Guidelines', 'Tone & Voice', 'Visual Strategy'],
  },
  {
    num: '04',
    title: 'UX/UI Systems',
    description: 'Systematic design that scales. We create token-based design systems and component libraries that keep teams aligned.',
    features: ['Design Tokens', 'Component Libraries', 'Accessibility', 'Documentation'],
  },
  {
    num: '05',
    title: 'Motion Design',
    description: 'Purposeful motion that supports clarity, never distracts. Micro-interactions, transitions, and scroll-driven narratives.',
    features: ['Micro-Animations', 'Page Transitions', 'Scroll Narratives', 'Lottie / GSAP'],
  },
  {
    num: '06',
    title: 'Performance & SEO',
    description: 'Speed is a feature. We optimize every byte, every render, every metric to ensure your site dominates search and delights users.',
    features: ['Core Web Vitals', 'Technical SEO', 'Lighthouse Audits', 'CDN & Edge'],
  },
];

export default function ServicesContent() {
  return (
    <section className={styles.servicesPage}>
      {/* Header */}
      <ScrollReveal className={styles.header}>
        <span className={`${styles.label} fade-up`}>• Our Services</span>
        <h1 className={`${styles.headline} fade-up`}>
          Everything your brand needs — <span className={styles.accent}>under one roof.</span>
        </h1>
        <p className={`${styles.subtext} fade-up`}>
          We don&apos;t do templates. Every engagement is a custom-crafted solution designed to
          achieve your specific business goals.
        </p>
      </ScrollReveal>

      {/* Services Grid */}
      <ScrollReveal className={styles.grid} stagger={80}>
        {SERVICES.map((service) => (
          <div key={service.num} className={`${styles.card} fade-up`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNum}>{service.num}</span>
              <h2 className={styles.cardTitle}>{service.title}</h2>
            </div>
            <p className={styles.cardDesc}>{service.description}</p>
            <ul className={styles.features}>
              {service.features.map((feature) => (
                <li key={feature} className={styles.feature}>
                  <span className={styles.featureDot} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal className={styles.cta}>
        <h2 className={`${styles.ctaHeadline} fade-up`}>
          Not sure what you need? <span className={styles.accent}>Let&apos;s talk.</span>
        </h2>
        <Link href="/contact" className={`${styles.ctaButton} fade-up`}>
          Get in Touch
        </Link>
      </ScrollReveal>
    </section>
  );
}
