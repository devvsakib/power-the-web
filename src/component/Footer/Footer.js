import React from "react";

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-[5px] bg-white/10">
      <p className="text-white p-1 flex justify-center text-center tracking-widest font-semibold">
        PowerTheWeb | Developed By PTW Community @ {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
