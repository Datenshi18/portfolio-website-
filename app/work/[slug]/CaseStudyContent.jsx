'use client'

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import styles from './casestudy.module.css';

export default function CaseStudyContent({ project }) {
  return (
    <article className={styles.article}>
      {/* Hero */}
      <header className={styles.hero}>
        <Link href="/work" className={styles.backLink}>
          ← Back to Work
        </Link>
        <span className={`${styles.category} fade-up`}>{project.category} — {project.year}</span>
        <h1 className={`${styles.title} fade-up`}>{project.title}</h1>
        <p className={`${styles.overview} fade-up`}>{project.overview}</p>
      </header>

      {/* Image placeholder */}
      <ScrollReveal>
        <div className={`${styles.heroImage} fade-up`}>
          <span className={styles.imageLabel}>Featured Image</span>
        </div>
      </ScrollReveal>

      {/* Challenge */}
      <ScrollReveal className={styles.section}>
        <span className={`${styles.sectionLabel} fade-up`}>The Challenge</span>
        <p className={`${styles.sectionText} fade-up`}>{project.challenge}</p>
      </ScrollReveal>

      {/* Solution */}
      <ScrollReveal className={styles.section}>
        <span className={`${styles.sectionLabel} fade-up`}>Our Solution</span>
        <p className={`${styles.sectionText} fade-up`}>{project.solution}</p>
      </ScrollReveal>

      {/* Results */}
      <ScrollReveal className={styles.section}>
        <span className={`${styles.sectionLabel} fade-up`}>Results</span>
        <ul className={styles.results}>
          {project.results.map((result, i) => (
            <li key={i} className={`${styles.resultItem} fade-up`}>
              <span className={styles.resultBullet} />
              {result}
            </li>
          ))}
        </ul>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal className={styles.ctaSection}>
        <h2 className={`${styles.ctaHeadline} fade-up`}>
          Ready to build something <span className={styles.accent}>extraordinary?</span>
        </h2>
        <Link href="/contact" className={`${styles.ctaButton} fade-up`}>
          Start Your Project
        </Link>
      </ScrollReveal>
    </article>
  );
}
