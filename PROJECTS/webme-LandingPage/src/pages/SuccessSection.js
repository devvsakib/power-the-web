import React from "react";
import styles from "./SuccessSection.module.css";
import SuccessSlider from "../components/SuccessSlider";
const SuccessSection = () => {
  return (
    <section className={styles.success}>
      <div className={styles.container}>
        <h2>Webme success stories</h2>
        <p className={styles.para}>11 Million Customers Globally an Growing</p>
      </div>
      <SuccessSlider />
    </section>
  );
};

export default SuccessSection;
