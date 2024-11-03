// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(`.${styles.navContainer}`) && !target.closest(`.${styles.menuButton}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { 
      path: '/shop', 
      label: 'Shop',
      subItems: [
        { path: '/shop/medications', label: 'Buy Medications' },
        { path: '/shop/pets', label: 'Buy Pets' },
        { path: '/shop/sell', label: 'Sell Your Pet' },
      ]
    },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/education', label: 'Education' },
    { path: '/testimonials', label: 'Testimonials' }, // Added testimonials
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoContainer}>
            <Logo className={styles.logo} />
          </Link>

          <div className={styles.menuContainer}>
            <button 
              className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`${styles.navContainer} ${isOpen ? styles.open : ''}`}>
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.path} className={styles.navItem}>
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li className={styles.navItem}>
                  <NavLink 
                    to="/booking"
                    className={({ isActive }) => 
                      `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Book Appointment
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;