import React from "react";

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-[5px] bg-white/10 flex items-center justify-center px-5 py-5">
      <p className="text-white flex justify-center text-center tracking-widest font-semibold">
        PowerTheWeb | Developed By PTW Community @ {new Date().getFullYear()}
      </p>
      <a
        href="https://www.producthunt.com/posts/powertheweb?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-powertheweb" target="_blank">
        <img className="ptwa-producthunt" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=383235&theme=dark" alt="PowerTheWeb - Empowering&#0032;the&#0032;web&#0044;&#0032;one&#0032;project&#0032;at&#0032;a&#0032;time&#0046; | Product Hunt" style={{ width: "250px", height: "54px" }} />
      </a>
    </footer>
  );
};

export default Footer;
