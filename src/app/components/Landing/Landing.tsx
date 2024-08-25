"use client";
import React from "react";
// packages
import { motion, useScroll, useTransform } from "framer-motion";
// styles
import styles from "./Landing.module.scss";

const Landing = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 850], [0, -150]);
  return (
    <section className={styles["container"]}>
      <div className={styles["drop"]} />
      <motion.div className={styles["image"]} style={{ y }} />
      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.heading}
      >
        Welcome to Our Undergarment Brand
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={styles.paragraph}
      >
        Discover comfort and style with our high-quality undergarments.
      </motion.p>
    </section>
  );
};

export default Landing;
