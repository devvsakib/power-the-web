import React from "react";
import styles from "./BusinessSection.module.css";
import Link from "antd/es/typography/Link";
const BusinessSection = () => {
  return (
    <section className={styles.business}>
      <div className={styles.container}>
        <h2> Got a business idea? Build it with Webme.</h2>
        <p>
          30-day <span> money-back guarantee</span> with every Webme plan.
        </p>
      </div>

      <div className={styles.btn}>
        <button className={styles.button}>
          <Link to="https://www.google.com/">Start For Free</Link>
        </button>
      </div>
    </section>
  );
};

export default BusinessSection;
