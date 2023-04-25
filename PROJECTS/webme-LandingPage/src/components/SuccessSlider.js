import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SuccessSlider.module.css";
import quotes from "../pages/resources/Icon-qoutes.svg";
// import { useSwiper } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
import "../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import author1 from "../pages/resources/author1.jpg";
import author2 from "../pages/resources/author2.jpg";
import star from "../pages/resources/star.svg";
// import rArrow from "../pages/resources/rarrow.svg";
// import lArrow from "../pages/resources/larrow.svg";

export default function Slider() {
  //   const swiper = useSwiper();

  return (
    <Swiper
      className={styles.container}
      spaceBetween={100}
      slidesPerView={"auto"}
      //   centeredSlides={true}
      navigation={{
        clickable: true,
      }}
      modules={[Navigation]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <button className="swiper-button-next">
        <rArrow />
      </button>
      <button className="swiper-button-prev">
        <lArrow />
      </button> */}

      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <img src={quotes} alt="img1" className="img" />
          <p>
            This is an amazing plugin that allows me to have ease of mind when
            I'm away from my printer. I can do extended prints at home while I'm
            at work without worry
          </p>
          <div className={styles["card-footer"]}>
            <img src={author1} alt="author1" className={styles.author} />
            <div className={styles["card-footer-content"]}>
              <h3>JOE STANDORD</h3>
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <img src={quotes} alt="img1" className="img" />
          <p>
            This is an amazing plugin that allows me to have ease of mind when
            I'm away from my printer. I can do extended prints at home while I'm
            at work without worry
          </p>
          <div className={styles["card-footer"]}>
            <img src={author2} alt="author1" className={styles.author} />
            <div className={styles["card-footer-content"]}>
              <h3>JOE STANDORD</h3>
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <img src={quotes} alt="img1" className="img" />
          <p>Great work!</p>
          <div className={styles["card-footer"]}>
            <img src={author1} alt="author1" className={styles.author} />
            <div className={styles["card-footer-content"]}>
              <h3>JOE STANDORD</h3>
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
              <img src={star} alt="star" className={styles.star} />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
