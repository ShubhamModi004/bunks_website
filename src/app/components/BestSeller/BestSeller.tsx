import React from "react";

// styles
import styles from "./BestSeller.module.scss";

// components
import Product from "./Product";
import ShopMore from "./ShopMore";

const BestSeller = () => {
  const products = [
    {
      id: 1,
      name: "Trunks - Navy Blue",
      material: "Super combed 100% cotton superior soft & comfortable brief with incredibly soft waistband",
      image: "/images/option1.JPG",
    },
    {
      id: 2,
      name: "Trunks - Grey",
      material: "Super combed 100% cotton superior soft & comfortable brief with incredibly soft waistband.",
      image: "/images/option2.JPG",
    },
    {
      id: 3,
      name: "Vest - Sleeved",
      material: "Super combed 100% cotton Round Neck half sleeved vest – white",
      image: "/images/option3.jpg",
    },
    {
      id: 4,
      name: "Vest - Sleeveless",
      material: "Super combed 100% cotton ultra soft & comfortable vest (round neck) – white",
      image: "/images/option5.jpg",
    },
  ];


  return (
    <div className={styles["container"]}>
      <h2>Best Seller</h2>
      <div className={styles["grid_container"]}>
        <div className={styles["products"]}>
            {products.map((product) => (
              <Product key={product?.id} product={product}/>
            ))}
        </div>
       <ShopMore />
      </div>
    </div>
  );
};

export default BestSeller;
