import { Collapse } from "antd";
import Link from "antd/es/typography/Link";
import styles from "./Accordian.module.css";
const { Panel } = Collapse;

const Accordian = (props) => (
  <Collapse
    accordion
    className={!props.className ? `${styles.accordion}` : `${props.className}`}
  >
    <Panel
      header="Is it easy to build a website"
      key="1"
      className={styles.head}
    >
      <p className={styles.para}>Yes!</p>
    </Panel>
    <Panel
      header="Can I create a website without knowing how to code?"
      key="2"
      className={styles.head}
    >
      <p className={styles.para}>Yes!</p>
    </Panel>
    <Panel
      header="How do I make my site mobile friendly?"
      key="3"
      className={styles.head}
    >
      <p className={styles.para}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or{" "}
        <Link to="/random" className={styles.link}>
          randomised
        </Link>{" "}
        words which don't look even slightly believable. If you are going to use
        a passage.
      </p>
    </Panel>
  </Collapse>
);

export default Accordian;
