import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {showTopBtn && (
        <FaAngleUp
          onClick={goToTop}
          className="fixed bottom-[70px] right-5 z-20 bg-[#efefbb] h-7 w-7 cursor-pointer border-2 border-black rounded-full"
        />
      )}
    </div>
  );
};

export default ScrollToTop;
