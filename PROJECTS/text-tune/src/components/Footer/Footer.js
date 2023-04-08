import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2023 Text Tune. All rights reserved.</p>
          <p className="created-by">
            Created by
            <a
              href="https://www.linkedin.com/in/nelson-uprety-951a2b156/"
              target="_blank"
              rel="noreferrer"
            >
              Nelson Uprety
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
