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
          className="fixed bottom-[30px] right-10 z-20 bg-gradient-to-r from-[#da35c4]/50 p-2 to-[#03b7ff]/50 h-12 w-12 cursor-pointer rounded-full text-3xl font-bold text-white"
        />
      )}
    </div>
  );
};

export default ScrollToTop;
