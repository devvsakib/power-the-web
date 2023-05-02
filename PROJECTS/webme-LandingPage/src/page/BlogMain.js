import React from "react";
import Navbar from "../components/Navbar";
import styles from "./BlogMain.module.css";
import Footer from "../pages/Footer";
import blogImage from "../pages/resources/BlogMain.jpg";
import blogImage1 from "../pages/resources/Blogsmall.svg";
import rightArrow from "../pages/resources/rightarrow.svg";
import lefttArrow from "../pages/resources/leftarrow.svg";
import redline from "../pages/resources/gren.svg";
import greenline from "../pages/resources/gr.svg";

const BlogMain = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <main className={styles.main}>
        <img src={greenline} alt="greenline" className={styles.greenline} />
        <div className={styles.container}>
          <h2 className={styles.head}>
            How to Start a Blog and Monetize it in 2023
          </h2>
          <div className={styles.image}>
            <img src={blogImage} alt="blogImage" className={styles.image} />
          </div>

          <p className={styles.content}>
            Im Zeitalter des Internets ist es auch für Vereine nahezu
            unerlässlich, sich auf einer eigenen Homepage zu präsentieren. Was
            zunächst nach einem Mehraufwand klingt, birgt großartige
            Gelegenheiten: Über eine Vereinshomepage können neue Mitglieder
            geworben und bereits angemeldete Personen über alles Wichtige
            bezüglich des Vereins informiert werden. Kostenlose Homepage
            erstellen
          </p>
          <div className={styles.time}>
            <p>27 minutes ago 12 min</p>
            <button className={styles.btn}>Read more</button>
          </div>
          <div className={styles.blogs}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={blogImage1} alt="blogImage1" />
              </div>
              <div className={styles["card-content"]}>
                <p className={styles.light}>27 minutes ago 12 min</p>
                <h3>21 Up-And-Coming Influencers You Should Follow in 2023</h3>
              </div>
            </div>
          </div>
          <div className={styles.pagination}>
            <button className={styles.arrow}>
              <img src={lefttArrow} alt="lefttArrow" />
            </button>
            <button className={styles.arrow}>
              <img src={rightArrow} alt="rightArrow" />
            </button>
          </div>
        </div>
        <img src={redline} alt="redline" className={styles.redline} />
      </main>
      <Footer />
    </section>
  );
};

export default BlogMain;
