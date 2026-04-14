'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          DIGITAL LIFT<span className={styles.logoDot}>.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(({ href, label }, i) => (
            <li key={href} style={{ transitionDelay: `${i * 0.06}s` }}>
              <Link
                href={href}
                className={`${styles.mobileLink} ${pathname === href ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
