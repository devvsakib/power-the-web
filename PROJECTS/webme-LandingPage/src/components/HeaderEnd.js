import React from "react";
import styles from "./HeaderEnd.module.css";
import img1 from "../pages/resources/Vector.svg";
import img2 from "../pages/resources/Vector (1).svg";
import img3 from "../pages/resources/Icon-3 1.svg";
const HeaderEnd = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={img1} alt="img1" />
        </div>
        <h4>11 Million Customers</h4>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={img2} alt="img2" />
        </div>
        <h4>24/7 Customer Support</h4>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={img3} alt="img3" />
        </div>
        <h4>14-days Money Back Guarantee</h4>
      </div>
    </div>
  );
};

export default HeaderEnd;
