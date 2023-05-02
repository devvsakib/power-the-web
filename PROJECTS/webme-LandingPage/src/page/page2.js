import React from "react";
import Navbar from "../components/Navbar";
import styles from "./page2.module.css";
import Footer from "../pages/Footer";
import about from "../pages/resources/about.webp";
const page2 = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <main className={styles.main}>
        <h2 className={styles.head}>About us</h2>
        <div className={styles.image}>
          <img src={about} alt="about" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page2;
