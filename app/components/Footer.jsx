'use client'

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className={styles.inner}>
        {/* Left — Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            DIGITAL LIFT<span className={styles.logoDot}>.</span>
          </Link>
          <p className={styles.tagline}>
            Cinematic digital experiences that convert.
          </p>
        </div>

        {/* Center — Links */}
        <nav className={styles.nav}>
          <span className={styles.navLabel}>Navigation</span>
          <ul className={styles.navList}>
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — Back to top */}
        <div className={styles.actions}>
          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span className={styles.arrow}>↑</span>
            <span className={styles.backLabel}>Back to top</span>
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Digital Lift. All rights reserved.
        </span>
        <span className={styles.credit}>
          Designed & Developed with precision.
        </span>
      </div>
    </footer>
  );
}
