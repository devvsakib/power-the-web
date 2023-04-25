// import React from "react";
// import { useState } from "react";
// import logo from "../pages/resources/logo.svg";
// import styles from "./Navbar.module.css";
// import icon from "../pages/resources/humburger.svg";
// import Link from "react-router-dom/Link";
// const Navbar = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const clickHandler = () => {
//     setIsChecked(!isChecked);
//     // console.log("print");
//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles["logo-head"]}>
//         <img src={logo} alt="logo" />
//         <h1>WEBME</h1>
//       </div>

//       <div className={styles.nav}>
//         <img
//           src={icon}
//           alt="icon"
//           className={styles.icon}
//           onClick={clickHandler}
//         />
//         <div
//           className={
//             !isChecked
//               ? `${styles.navbar}`
//               : `${(styles.navbar, styles.active)}`
//           }
//         >
//           <ul className={styles.pages}>
//             <li>
//               <Link to="/">Websites</Link>
//               <div className={styles.toggle}>
//                 <p>Create your Website</p>
//                 <p>Some other Pages</p>
//                 <p>Create Website now</p>
//               </div>
//             </li>
//             <li>
//               <Link to="/Guide">Guide</Link>

//               <div className={styles.toggle}>
//                 <p>How can I</p>
//               </div>
//             </li>
//             <li>
//               <Link to="pricing">Pricing</Link>
//             </li>
//             <li>
//               <Link to="/blog-main">AllBlogs</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link to="/about-us">FR</Link>
//             </li>
//           </ul>

//           <a href="login" className={styles.login}>
//             Log In
//           </a>
//         </div>

//         <button className={styles.btn}>Start for free</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { useState } from "react";
import logo from "../pages/resources/logo.svg";
import styles from "./Navbar.module.css";
import icon from "../pages/resources/humburger.svg";
import Link from "react-router-dom/Link";
const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const clickHandler = () => {
    setIsChecked(!isChecked);
    // console.log("print");
  };
  return (
    <div className={styles.container}>
      <div className={styles["logo-head"]}>
        <img src={logo} alt="logo" />
        <h1>WEBME</h1>
      </div>

      <div className={styles.nav}>
        <img
          src={icon}
          alt="icon"
          className={styles.icon}
          onClick={clickHandler}
        />
        <div
          className={
            !isChecked
              ? `${styles.navbar}`
              : `${(styles.navbar, styles.active)}`
          }
        >
          <ul className={styles.pages}>
            <li>
              <Link to="#">Websites</Link>
              <div className={styles.toggle}>
                <p>Create your Website</p>
                <p>Some other Pages</p>
                <p>Create Website now</p>
              </div>
            </li>
            <li>
              <Link to="#">Guide</Link>

              <div className={styles.toggle}>
                <p>How can I</p>
              </div>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/blog-main">AllBlogs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about-us">FR</Link>
            </li>
          </ul>

          <a href="login" className={styles.login}>
            Log In
          </a>
        </div>

        <button className={styles.btn}>Start for free</button>
      </div>
    </div>
  );
};

export default Navbar;
