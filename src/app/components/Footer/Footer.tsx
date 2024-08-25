import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} by <span className={styles.brand}>Bunk</span>. Made with ♥</p>
    </footer>
  );
};

export default Footer;
