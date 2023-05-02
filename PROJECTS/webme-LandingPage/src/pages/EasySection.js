import React from "react";
import styles from "./EasySection.module.css";
import step1 from "../pages/resources/step1.jpg";
import step2 from "../pages/resources/step2.jpg";
import step3 from "../pages/resources/step3.jpg";
const EasySection = () => {
  return (
    <section className={styles.easy}>
      <h2>Create a website in three easy steps</h2>
      <p>
        Build something awesome for your business, your portfolio or yourself.
      </p>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src={step1} alt="step1" />
          <h3> 1. Choose a Profession</h3>
          <p>
            Select the purpose of your website and give us an idea of what you
            like
          </p>
        </div>
        <div className={styles.card}>
          <img src={step2} alt="step2" />
          <h3> 2.Webme builds your site</h3>
          <p>
            We will design your website based on your needs and fill it alreay
            with content
          </p>
        </div>
        <div className={styles.card}>
          <img src={step3} alt="step3" />
          <h3>3. Publish your site</h3>
          <p>
            All set? Hit publish and your site will be online on your own
            domain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EasySection;
