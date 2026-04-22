"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Portfolio<span className={styles.dot}>.</span>
        </Link>
        
        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ''}`}>
          <ul className={styles.mobileNavLinks}>
            <li><Link href="#about" onClick={closeMenu}>About</Link></li>
            <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
