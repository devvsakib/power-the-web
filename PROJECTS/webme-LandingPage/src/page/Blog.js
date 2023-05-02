import React from "react";
import Link from "react-router-dom/Link";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";
import styles from "./Blog.module.css";
import greenline from "../pages/resources/gr.svg";
import redline from "../pages/resources/gren.svg";
import fb from "../pages/resources/blogfb.svg";
import insta from "../pages/resources/bloginsta.svg";
import twitter from "../pages/resources/blogtwitter.svg";
import image from "../pages/resources/blogimage.jpg";
import tick from "../pages/resources/blogtick.svg";
import image2 from "../pages/resources/blogimage2.jpg";
// import Accordian from "../components/Accordian";
import MuiAccordian from "../components/MuiAccordian";
const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <main>
        <img src={greenline} alt="greenline" className={styles.greenline} />
        <div className={styles.container}>
          <h2 className={styles.head}>
            Eine Vereinshomepage erstellen - diese 10 Inhalte müssen rein!
          </h2>
          <p className={styles["blog-para"]}>
            aus der Kategorie "<span>Webdesign</span>" <br />
            Schwierigkeitsgrad: Anfänger
          </p>
          <div className={styles.icons}>
            <img src={fb} alt="fb" className={styles.fb} />
            <img src={insta} alt="insta" className={styles.insta} />
            <img src={twitter} alt="twitter" className={styles.twit} />
          </div>

          <img src={image} alt="blog" className={styles.image1} />
          <h3>Vereinshomepage als zentrale Anlaufstelle</h3>
          <div className={styles["blog-green"]}>
            <h4>How do I make my site mobile friendly?</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage.
            </p>
          </div>
          <div className={styles["blog-para1"]}>
            <p>
              Im Zeitalter des Internets ist es auch für Vereine nahezu
              unerlässlich, sich auf einer eigenen Homepage zu präsentieren.
              erstellen
            </p>
            <p>
              Was zunächst nach einem Mehraufwand klingt, birgt großartige
              Gelegenheiten: Über eine Vereinshomepage können neue Mitglieder
              geworben und bereits angemeldete Personen über alles Wichtige
              bezüglich des Vereins informiert werden.
              <br />
              <Link to="/https://www.homepage-baukasten.de/">
                Kostenlose Homepage
              </Link>
            </p>
          </div>
          <ul className={styles["blog-red"]}>
            <li>
              <span className={styles.number}>1</span>
              Choose your website type
            </li>
            <li>
              <span className={styles.number}>2</span>
              Decide how you want to create your website
            </li>
            <li>
              <span className={styles.number}>3</span>
              Find a suitable domain
            </li>
            <li>
              <span className={styles.number}>4</span>
              Plan your own website
            </li>
            <li>
              <span className={styles.number}>5</span>
              Create important pages
            </li>
            <li>
              <span className={styles.number}>6</span>
              Design your site
            </li>
          </ul>
          <button className={styles.btn}>Kostenlose Homepage erstellen</button>
          <h3>Vereinshomepage als zentrale Anlaufstelle</h3>
          <ul className={styles["blog-tick"]}>
            <li>
              <span>
                <img src={tick} alt="tick" className={styles.tick} />
              </span>
              Choose your website type
            </li>
            <li>
              <span>
                <img src={tick} alt="tick" className={styles.tick} />
              </span>
              Decide how you want to create your website
            </li>
            <li>
              <span>
                <img src={tick} alt="tick" className={styles.tick} />
              </span>
              Find a suitable domain
            </li>
            <li>
              <span>
                <img src={tick} alt="tick" className={styles.tick} />
              </span>
              Plan your own website
            </li>
            <li>
              <span>
                <img src={tick} alt="tick" className={styles.tick} />
              </span>
              Create important pages
            </li>
            <li>
              <span>
                <img src={tick} alt="tick" className={styles.tick} />
              </span>
              Design your site
            </li>
          </ul>
          <img src={image2} alt="blog" className={styles.image2} />
          <div className={styles.accordian}>
            <MuiAccordian />
          </div>
          <div className={styles["blog-yellow"]}>
            <h4>How do I make my site mobile friendly?</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage.
            </p>
          </div>
          <button className={styles.btn}>Kostenlose Homepage erstellen</button>
        </div>
        <img src={redline} alt="greenline" className={styles.redline} />
      </main>

      <Footer />
    </section>
  );
};

export default Blog;
