import React from "react";
import styles from "./Plan.module.css";
import tick from "../pages/resources/tick.svg";
import green from "./resources/Green-line.svg";
import { Link } from "react-router-dom";
const Plan = () => {
  return (
    <section className={styles.plan}>
      <h2 className={styles["plan-heading"]}>
        Choose your website builder plan
      </h2>
      <div className={styles["plan-container"]}>
        <div className={styles.card}>
          <h3>Business</h3>
          <p>Full performance for professional growth</p>
          <h3 className={styles.price}>$ 9.99/mo</h3>
          <p className={styles.light}>VAT may apply</p>
          <button className={styles.btn}>Select Now</button>

          <ul>
            <li>
              <img src={tick} alt="tick" />
              Your own Domain
              <Link to="/domain" className={styles.link}>
                included
              </Link>
            </li>
            <li>
              <img src={tick} alt="tick" />
              Ads free
            </li>
            <li>
              <img src={tick} alt="tick" />
              Unlimited Subpages & Bandwidth
            </li>
            <li>
              <img src={tick} alt="tick" />
              Email Forwarding
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Starter</h3>
          <p>For associations and self-employed persons</p>
          <h3 className={styles.price}>€12,90 /mo</h3>
          <p className={styles.light}>VAT may apply</p>
          <button className={styles.btn}>Select Now</button>

          <ul>
            <li>
              <img src={tick} alt="tick" />
              Your own Domain
            </li>
            <li>
              <img src={tick} alt="tick" />
              Email Forwarding
            </li>
            <li>
              <img src={tick} alt="tick" />
              Ads free
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Private</h3>
          <p>For private use</p>
          <h3 className={styles.price}>€7,90 /mo</h3>
          <p className={styles.light}>VAT may apply</p>
          <button className={styles.btn}>Select Now</button>

          <ul>
            <li>
              <img src={tick} alt="tick" />
              webmesites.com address
            </li>
            <li>
              <img src={tick} alt="tick" />
              Without ads
            </li>
            <li>
              <img src={tick} alt="tick" />
              SSL encrypted
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.end}>
        <Link to="/domain" className={styles.endlink}>
          + See All Features
        </Link>
      </div>
      <img src={green} alt="green" className={styles.green} />
    </section>
  );
};

export default Plan;
