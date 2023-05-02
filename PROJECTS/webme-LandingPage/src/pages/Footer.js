import React from "react";
import styles from "./Footer.module.css";
import Link from "react-router-dom/Link";
import fb from "../pages/resources/fb.svg";
import twitter from "../pages/resources/twitter.svg";
import insta from "../pages/resources/insta.svg";
import linkedIn from "../pages/resources/linkedin.png";
import red from "../pages/resources/redf.svg";
import green from "../pages/resources/greenf.svg";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <img src={red} alt="red" className={styles.red} />
        <div className={styles.container}>
          <div className={styles.content}>
            <ul>
              <li>
                <h3 className={styles["footer-head"]}>About Us</h3>
              </li>
              <li>
                <Link to="/">Homes</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
                <h3 className={styles["footer-head"]}>Review</h3>
              </li>
              <li>
                <Link to="/blog-main">ALLBlogs</Link>
              </li>
              <li>
                <Link to="/blog">blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
                <h3 className={styles["footer-head"]}>Sign Up today</h3>
              </li>
              <li>
                <Link to="/about-us">News</Link>
              </li>
              <li>
                <Link to="/about-us">Team</Link>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <uL>
              <li>
                <div className={styles["footer-icons"]}>
                  <img src={fb} alt="fb" />
                  <img src={twitter} alt="twitter" />
                  <img src={insta} alt="insta" />
                  <img src={linkedIn} alt="linkedIn" />
                </div>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  info@webme.com
                </Link>
              </li>
              <li>202-460-9955</li>
              <li>
                <p className={styles.para}>
                  &copy;2022 Webme. All rights reserved.
                </p>
              </li>
            </uL>
          </div>
        </div>

        <img src={green} alt="green" className={styles.green} />
      </footer>
    </>
  );
};

export default Footer;
