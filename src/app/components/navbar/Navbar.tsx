import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const repeatCount = 8; // Number of times to repeat the text
  const marqueeText = "Save 30% on Our Summer Collection with Code: SC2035!";
  const repeatedTextArray = Array(repeatCount).fill(marqueeText);

  return (
    <div>
      {/* <div className={styles["marquee-container"]}>
        <div className={styles.marquee}>
          {repeatedTextArray.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      </div> */}
      <nav className={styles.navbar}>
        <div className={styles["company-name"]}>Bunk</div>
      </nav>
    </div>
  );
};

export default Navbar;