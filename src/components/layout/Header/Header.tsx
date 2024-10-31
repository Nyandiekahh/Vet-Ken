// Header.tsx
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/contact' }
  ];

  const MenuIcon: React.FC = () => (
    <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon: React.FC = () => (
    <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <header>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <a href="/" className={styles.brandName}>
            VetCare Pro
          </a>
          <div className={styles.emergencyContact}>
            <div>
              <span>24/7 Emergency: </span>
              <a href="tel:+254702687855" className={styles.emergencyPhone}>
                +254 702 687 855
              </a>
            </div>
            <button className={styles.bookButton}>
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${styles.mainNav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Desktop Navigation */}
          <div className={styles.navContent}>
            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuToggle}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Desktop Links */}
            <div className={styles.navLinks}>
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`${styles.mobileMenu} ${styles.open}`}>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;