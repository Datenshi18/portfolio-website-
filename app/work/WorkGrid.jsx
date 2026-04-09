'use client'

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './work.module.css';

const projects = [
  {
    slug: 'van-der-linde-agency',
    num: '01',
    title: 'The Van Der Linde Agency',
    category: 'Branding & Web Design',
    description: 'A premium B2B branding experience that captures the essence of frontier digital design.',
    year: '2026',
  },
  {
    slug: 'outlaw-systems',
    num: '02',
    title: 'Outlaw Systems',
    category: 'Web Development',
    description: 'High-performance architecture built for those who break the rules of conventional UI.',
    year: '2025',
  },
  {
    slug: 'frontier-digital',
    num: '03',
    title: 'Frontier Digital',
    category: 'E-Commerce',
    description: 'Modern e-commerce solutions with a rugged, cinematic aesthetic.',
    year: '2025',
  },
  {
    slug: 'redemption-ii',
    num: '04',
    title: 'Redemption II',
    category: 'Design Systems',
    description: 'A comprehensive design system that balances grit with absolute precision.',
    year: '2024',
  },
  {
    slug: 'iron-horse-studios',
    num: '05',
    title: 'Iron Horse Studios',
    category: 'Motion & Branding',
    description: 'Bold identity design and motion graphics for a creative powerhouse.',
    year: '2024',
  },
  {
    slug: 'blackwater-digital',
    num: '06',
    title: 'Blackwater Digital',
    category: 'Full Package',
    description: 'End-to-end digital transformation with precision UX and performance optimization.',
    year: '2024',
  },
];

export default function WorkGrid() {
  return (
    <section className={styles.workSection}>
      {/* Header */}
      <ScrollReveal className={styles.header}>
        <span className="fade-up">
          <span className={styles.label}>• Selected Work</span>
        </span>
        <h1 className={`${styles.headline} fade-up`}>
          Projects that <span className={styles.accent}>speak volumes.</span>
        </h1>
        <p className={`${styles.subtext} fade-up`}>
          Every project is a story of strategy, craft, and obsessive attention to detail.
        </p>
      </ScrollReveal>

      {/* Grid */}
      <ScrollReveal className={styles.grid} stagger={80}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`${styles.card} fade-up`}
          >
            <div className={styles.cardImagePlaceholder}>
              <span className={styles.cardNumber}>{project.num}</span>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <span className={styles.cardCategory}>{project.category}</span>
                <span className={styles.cardYear}>{project.year}</span>
              </div>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDesc}>{project.description}</p>
              <span className={styles.cardCta}>
                View Project <span className={styles.arrow}>→</span>
              </span>
            </div>
          </Link>
        ))}
      </ScrollReveal>
    </section>
  );
}
