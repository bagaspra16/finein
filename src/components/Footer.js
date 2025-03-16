import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {currentYear} FineIn | Designed with <span className="heart">❤</span> by{' '}
          <a 
            href="https://bagaspra16-portfolio.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="author-link"
          >
            bagaspra16
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;