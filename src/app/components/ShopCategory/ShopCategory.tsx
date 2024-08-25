"use client";

import React, { useRef } from "react";
import Image from "next/image";

// styles
import styles from "./ShopCategory.module.scss";

// framer
import { motion, useInView } from "framer-motion";

const ShopCategory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 100px -50px 0px" });

  return (
    <div className={styles["container"]}>
      <h2>Categories</h2>
      <motion.div
        ref={ref}
        style={{
          filter: isInView ? "blur(0px)" : "blur(2px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles["categories"]}
      >
        <div className={styles["image_container"]}>
          <div className={styles["drop"]} />
          <Image src={"/images/trunksCat.jpg"} alt="briefs" layout="fill" />
          <h2>TRUNKS</h2>
        </div>
        <div className={styles["image_container"]}>
          <div className={styles["drop"]} />
          <Image src={"/images/Vest.jpg"} alt="trunks" layout="fill" />
          <h2>VESTS</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default ShopCategory;
