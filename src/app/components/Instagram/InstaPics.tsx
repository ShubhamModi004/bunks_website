"use client";

import React, { useRef } from "react";
import Image from "next/image";

// styles
import styles from "./Instagram.module.scss";

// framer
import { motion, useInView } from "framer-motion";

interface Props {
  src: string;
  value: string;
}

const InstaPics = ({ src, value }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className={styles["image_container"]}
      style={{
        transform: isInView ? "none": `translateY(${value})`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <Image src={src} layout="fill" alt="banka" />
    </motion.div>
  );
};

export default InstaPics;
