import React from "react";
import styles from "./FAQ.module.css";
// import Accordian from "../components/Accordian";
import MuiAccordian from "../components/MuiAccordian";
import red from "../pages/resources/Red-line.svg";
import yellow from "../pages/resources/yellow.svg";
const FAQ = () => {
  return (
    <section className={styles.faq}>
      <img src={red} alt="red" className={styles.red} />
      <div className={styles.container}>
        <h2>Frequently asked questions</h2>
        <p className={styles.para1}>
          Build something awesome for your business, your portfolio or yourself.
        </p>
      </div>
      <div className={styles.accordian}>
        <MuiAccordian />
      </div>
      <img src={yellow} alt="yellow" className={styles.yellow} />
    </section>
  );
};

export default FAQ;
