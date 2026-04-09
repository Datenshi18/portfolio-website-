'use client'

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './process.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, audience, goals, and competitive landscape. No assumptions — just research and honest conversations.',
    duration: '1-2 Weeks',
  },
  {
    num: '02',
    title: 'Strategy',
    description: 'Based on our discovery findings, we define the information architecture, user flows, and project roadmap. Every decision is backed by data.',
    duration: '1 Week',
  },
  {
    num: '03',
    title: 'Design',
    description: 'We translate strategy into visual reality. High-fidelity mockups, interactive prototypes, and a design system that ensures consistency at scale.',
    duration: '2-4 Weeks',
  },
  {
    num: '04',
    title: 'Develop',
    description: 'Pixel-perfect implementation with clean, scalable code. Every interaction, every animation, every responsive breakpoint — built to perfection.',
    duration: '3-6 Weeks',
  },
  {
    num: '05',
    title: 'Launch',
    description: 'Rigorous QA testing, performance optimization, and a seamless deployment. We don\'t just ship — we launch with confidence.',
    duration: '1 Week',
  },
  {
    num: '06',
    title: 'Optimize',
    description: 'Post-launch monitoring, analytics reviews, and iterative improvements. The launch is just the beginning of the journey.',
    duration: 'Ongoing',
  },
];

export default function ProcessContent() {
  return (
    <section className={styles.processPage}>
      {/* Header */}
      <ScrollReveal className={styles.header}>
        <span className={`${styles.label} fade-up`}>• Our Process</span>
        <h1 className={`${styles.headline} fade-up`}>
          From vision to <span className={styles.accent}>reality.</span>
        </h1>
        <p className={`${styles.subtext} fade-up`}>
          A proven, structured process that transforms ideas into premium digital
          experiences — on time, on budget, and beyond expectations.
        </p>
      </ScrollReveal>

      {/* Timeline */}
      <ScrollReveal className={styles.timeline} stagger={100}>
        <div className={styles.timelineLine} />

        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className={`${styles.timelineItem} ${i % 2 === 1 ? styles.right : ''} fade-up`}
          >
            <div className={styles.timelineDot}>
              <span className={styles.dotInner} />
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.cardTop}>
                <span className={styles.stepNum}>{step.num}</span>
                <span className={styles.duration}>{step.duration}</span>
              </div>
              <h2 className={styles.stepTitle}>{step.title}</h2>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          </div>
        ))}
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal className={styles.cta}>
        <h2 className={`${styles.ctaHeadline} fade-up`}>
          Ready to start <span className={styles.accent}>your project?</span>
        </h2>
        <Link href="/contact" className={`${styles.ctaButton} fade-up`}>
          Let&apos;s Begin
        </Link>
      </ScrollReveal>
    </section>
  );
}
