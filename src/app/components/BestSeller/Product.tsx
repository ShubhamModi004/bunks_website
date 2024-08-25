"use client";

import React, { useRef } from "react";
// next images
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// styles
import styles from "./BestSeller.module.scss";

type Product = {
  id: number;
  name: string;
  material: string;
  image: string;
};

interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 100px -50px 0px" });
  return (
    <motion.div
      style={{
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0px)" : "blur(2px)",
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
      }}
      ref={ref}
      key={product.id}
      className={styles.product}
    >
      <div className={styles["image_container"]}>
        <Image src={product.image} alt={product.name} layout="fill" />
      </div>
      <h2>{product.name}</h2>
      <p>{product.material}</p>
    </motion.div>
  );
};

export default Product;
