import styles from "./home.module.css";
import Navbar from "./../components/Navbar";
import Slider from "../components/Slider";
import HeaderEnd from "../components/HeaderEnd";
const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <Navbar />
        <main className={styles.container}>
          <div className={styles.content}>
            <h1>Create your own Website in minutes</h1>

            <h3>In a few easy steps online</h3>
            <button className={`${styles.btn} ${styles.free}`}>
              Get Started
            </button>
          </div>
          <div className={styles.slider}>
            <Slider />
          </div>
        </main>
        <HeaderEnd />
      </section>
    </>
  );
};

export default Home;
