"use client";

import React from "react";
// styles
import styles from "./Instagram.module.scss";

// components
import InstaPics from "./InstaPics";

// framer
import { motion } from "framer-motion";

const Instagram = () => {
  const handleClick = () => {
    window.open(
      "https://www.instagram.com/born_under_night_kingdom?igsh=MWJ4d2VwaGR4dGQ0NA==",
      "_blank"
    );
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["images"]}>
        <InstaPics src={"/images/insta1.jpg"} value="200px" />
        <InstaPics src={"/images/insta2.JPG"} value="-200px" />
      </div>
      <div className={styles["follow_container"]}>
        <h2>FOLLOW US ON INSTAGRAM</h2>
        <p>Stay updated on the latest trends</p>
        <button className={styles.button} onClick={handleClick}>
          EXPLORE
        </button>
      </div>
      <div className={`${styles["images"]} ${styles["mt2"]}`}>
        <InstaPics src={"/images/insta3.JPG"} value="200px" />
        <InstaPics src={"/images/insta4.jpg"} value="-200px" />
      </div>
    </div>
  );
};

export default Instagram;
