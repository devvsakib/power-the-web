import React from "react";
import styles from "./BuildSection.module.css";
import { Link } from "react-router-dom";
import img1 from "../pages/resources/build1.jpg";
import img2 from "../pages/resources/build2.jpg";
import green from "../pages/resources/Green-line1.svg";
import red from "../pages/resources/Red-line.svg";

const BuildSection = () => {
  return (
    <section className={styles.build}>
      <img src={green} alt="green" className={styles.green} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Build fast. Grow faster. Load fastest.</h2>
          <p>
            Create your website in minutes and grow it easy with your business.
            Impress your customers and improve your SEO ranking with amazing
            fast loading times
          </p>
          <Link to="https://www.webme.com/" className={styles.link}>
            Get Your Business Now
          </Link>
        </div>
        <div className={styles.image}>
          <img src={img1} alt="build1" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img2} alt="build1" />
        </div>
        <div className={styles.content}>
          <h2>Customer support. Ready 24/7.</h2>
          <p>
            Stuck? Not for long. Our support team is there to help and our
            knowledge center gives you insights and howtos.
          </p>
          <Link to="https://www.webme.com/" className={styles.link}>
            Get Started Now
          </Link>
        </div>
      </div>
      <img src={red} alt="red" className={styles.red} />
    </section>
  );
};

export default BuildSection;
