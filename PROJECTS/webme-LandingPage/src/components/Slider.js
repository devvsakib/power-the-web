import img1 from "../pages/resources/img1.png";
import img2 from "../pages/resources/img2.webp";
import styles from "./Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Slider() {
  return (
    <>
      <Swiper className={styles["img-container"]}>
        <SwiperSlide>
          <img src={img2} alt="img1" className="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="img2" className="img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
