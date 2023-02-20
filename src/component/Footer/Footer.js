import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <p className="text-white p-2 flex justify-center text-center tracking-widest">
        PowerTheWeb | Developed By PTW Community @ {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;