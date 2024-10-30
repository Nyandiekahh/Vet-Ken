import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <button 
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  isActive ? styles.activeLink : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;