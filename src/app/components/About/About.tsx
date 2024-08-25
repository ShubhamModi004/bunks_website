"use client";

import React, { useRef } from "react";
import Image from "next/image";

// styles
import styles from "./About.module.scss";

// framer
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 100px -50px 0px" });
  return (
    <div className={styles["container"]}>
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles["image_section"]}
      >
        <motion.div
          className={styles["image_container"]}
          style={{
            transform: isInView ? "none" : "translateX(400px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={"/images/vestAbout.jpg"} layout="fill" alt="banka" />
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles["text_section"]}
      >
        <h2>
          Bunk <br /> UNDERGARMENTS
        </h2>
        <p>&nbsp;</p>
        <p
          className={styles["p2"]}
        >{`Welcome to Bunk Undergarments, where comfort meets quality in every stitch. At Bunk, we believe that your day starts with the right foundation, which is why we are committed to providing undergarments that offer unparalleled comfort and durability.`}</p>
        <p>&nbsp;</p>
        <p className={styles["p2"]}>
          {`Who We Are: Bunk is more than just a brand; it’s a promise of quality, comfort, and style. We are a team of passionate individuals dedicated to crafting premium undergarments that meet the highest standards. Our mission is to offer essentials that not only feel good but also last long, keeping you comfortable all day, every day.`}
          .
        </p>
        <p>&nbsp;</p>
        <p
          className={styles["p2"]}
        >{`What We Offer: Our product line includes a variety of undergarments, each meticulously crafted from 100% combed, premium quality cotton. Whether you’re looking for superior soft briefs, ultra-comfortable sleeveless vests, or cozy sleeved vests, Bunk has you covered. Our products are designed with your comfort in mind, ensuring a perfect fit and a soft touch that feels gentle against your skin.`}</p>
        <p>&nbsp;</p>
        <p
          className={styles["p2"]}
        >{`Why Choose Bunk: At Bunk, we don’t just sell undergarments; we offer a commitment to excellence. Our use of high-quality cotton ensures that our products are not only soft and breathable but also durable enough to withstand everyday wear. What sets us apart is our attention to detail and our focus on delivering products that combine superior softness with long-lasting performance.`}</p>
        <p>&nbsp;</p>
        <p
          className={styles["p2"]}
        >{`Our Story: Bunk was founded on the belief that everyone deserves undergarments that provide both comfort and style. We started with a simple idea: to create undergarments that feel as good as they look. Today, we are proud to offer a range of products that embody that vision, delivering comfort and quality to customers everywhere.`}</p>
        <p>&nbsp;</p>
      </motion.div>
    </div>
  );
};

export default About;
