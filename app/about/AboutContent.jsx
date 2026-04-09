'use client'

import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import styles from './about.module.css';

const VALUES = [
  {
    num: '01',
    title: 'Craft Over Convention',
    description: 'We don\'t follow trends — we set them. Every pixel, every interaction is deliberate.',
  },
  {
    num: '02',
    title: 'Substance Before Style',
    description: 'Beautiful design means nothing without strategy. We build things that work and look extraordinary.',
  },
  {
    num: '03',
    title: 'Relentless Standards',
    description: 'Good enough isn\'t. We refine until every detail is exactly right — no shortcuts, no compromises.',
  },
  {
    num: '04',
    title: 'Partnership, Not Service',
    description: 'We embed ourselves in your vision. Your success is our reputation.',
  },
];

const TEAM = [
  { name: 'Alex Hartwell', role: 'Creative Director' },
  { name: 'Morgan Steele', role: 'Lead Developer' },
  { name: 'Riley Cross', role: 'UX Strategist' },
  { name: 'Jordan Voss', role: 'Visual Designer' },
];

export default function AboutContent() {
  return (
    <section className={styles.aboutSection}>
      {/* Hero */}
      <ScrollReveal className={styles.hero}>
        <span className={`${styles.label} fade-up`}>• About Us</span>
        <h1 className={`${styles.headline} fade-up`}>
          We build digital <span className={styles.accent}>experiences</span> that
          feel like cinema.
        </h1>
        <p className={`${styles.subtext} fade-up`}>
          Agency. is a collective of designers, developers, and strategists who
          believe the web deserves better. We craft premium digital experiences
          with obsessive attention to craft and clarity.
        </p>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal className={styles.stats}>
        <div className={`${styles.stat} fade-up`}>
          <span className={styles.statNumber}>50+</span>
          <span className={styles.statLabel}>Projects Delivered</span>
        </div>
        <div className={`${styles.stat} fade-up`}>
          <span className={styles.statNumber}>98%</span>
          <span className={styles.statLabel}>Client Retention</span>
        </div>
        <div className={`${styles.stat} fade-up`}>
          <span className={styles.statNumber}>4.9</span>
          <span className={styles.statLabel}>Average Rating</span>
        </div>
        <div className={`${styles.stat} fade-up`}>
          <span className={styles.statNumber}>6+</span>
          <span className={styles.statLabel}>Years of Craft</span>
        </div>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal className={styles.valuesSection}>
        <h2 className={`${styles.sectionTitle} fade-up`}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {VALUES.map((value) => (
            <div key={value.num} className={`${styles.valueCard} fade-up`}>
              <span className={styles.valueNum}>{value.num}</span>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDesc}>{value.description}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Team */}
      <ScrollReveal className={styles.teamSection}>
        <h2 className={`${styles.sectionTitle} fade-up`}>The Team</h2>
        <div className={styles.teamGrid}>
          {TEAM.map((member) => (
            <div key={member.name} className={`${styles.teamCard} fade-up`}>
              <div className={styles.teamAvatar}>
                <span className={styles.avatarInitial}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className={styles.teamName}>{member.name}</h3>
              <span className={styles.teamRole}>{member.role}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
