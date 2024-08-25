"use client";

import React, { useRef } from "react";
// next images
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// styles
import styles from "./BestSeller.module.scss";

const ShopMore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={ref}
      className={styles["shop-more"]}
    >
      <div className={styles["drop"]}/>
      <div className={styles["image_container"]}>
        <Image src={"/images/kit.JPG"} layout="fill" alt="group" />
      </div>
      <motion.h2
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        TRY OUR KIT
      </motion.h2>
    </motion.div>
  );
};

export default ShopMore;
